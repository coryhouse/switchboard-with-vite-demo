import { RequestHandler, rest } from "msw";
import { getRandomNumberBelow } from "../../utils/number-utils";
import { Endpoint, RequestHandlerConfig, Todo } from "../demo-app-types";
import { personas } from "./personas";

// A function that generates mock API request handlers.
// This function accepts the necessary data for generating custom responses in each handler.
export function generateRequestHandlers(
  configRef: React.MutableRefObject<RequestHandlerConfig | null>
): RequestHandler[] {
  // Returns the endpoints delay if one is specified
  // Falls back to global delay if one is specified.
  // Returns 0 otherwise.
  function getDelay(endpointDelay?: number) {
    if (endpointDelay) return endpointDelay;
    return configRef.current?.delay ?? 0;
  }

  function getCustomResponseSettings(endpoint: Endpoint) {
    return configRef.current?.customResponses.find(
      (r) => r.endpointName === endpoint
    );
  }

  function getUserFromLocalStorage() {
    const userId = localStorage.getItem("userId");
    if (userId === null) throw new Error("userId not found in localStorage");
    if (!parseInt(userId))
      throw new Error("userId in localStorage is not a number");
    const user = personas.find((u) => u.id === parseInt(userId));
    if (!user) throw new Error("User not found in localStorage: " + userId);
    return user;
  }

  function getUser() {
    return personas.find((u) => u.id === userId);
  }

  return [
    // TODO: Extract and accept as an arg to the hook
    rest.post("/login", async (req, res, ctx) => {
      const setting = getCustomResponseSettings("login");
      const { email, password } = await req.json();

      const user = personas.find(
        (u) => u.email === email && u.password === password
      );
      if (!user) return res(ctx.status(401));

      // TODO: Return JWT and pass it into all calls to show a more realistic approach
      return res(
        ctx.delay(getDelay(setting?.delay)),
        ctx.json(user),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.get("/user", async (_req, res, ctx) => {
      const setting = getCustomResponseSettings("getUser");
      const user = getUserFromLocalStorage();
      if (!user) return res(ctx.status(401));

      return res(
        ctx.delay(getDelay(setting?.delay)),
        ctx.json(setting?.response ?? user),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.get("/todos", async (_req, res, ctx) => {
      const setting = getCustomResponseSettings("getTodos");
      const user = getUser();
      if (!user) return res(ctx.status(401));

      return res(
        ctx.delay(getDelay(setting?.delay)),
        ctx.json(setting?.response ?? user.todos),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.post("/todo", async (req, res, ctx) => {
      const { todo } = await req.json();
      const user = getUser();
      if (!user) return res(ctx.status(401));
      const defaultResp: Todo = {
        // TODO: Read the todos from memory so the reduce call below works.
        // They're in Todos.tsx's state, so how can we access them?
        // const maxTodoId = user.todos.reduce((max, t) => Math.max(max, t.id), 0);
        id: getRandomNumberBelow(100000),
        completed: false,
        todo: todo as string,
      };
      const setting = getCustomResponseSettings("addTodo");
      return res(
        ctx.delay(getDelay(setting?.delay)),
        ctx.json(setting?.response ?? defaultResp),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.put("/todo/:id", async (req, res, ctx) => {
      const setting = getCustomResponseSettings("toggleTodoCompleted");
      return res(
        ctx.delay(getDelay(setting?.delay)),
        ctx.json(setting?.response ?? ""),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.delete("/todo/:id", async (req, res, ctx) => {
      const setting = getCustomResponseSettings("deleteTodo");
      return res(
        ctx.delay(getDelay(setting?.delay)),
        ctx.json(setting?.response ?? ""),
        ctx.status(setting?.status ?? 200)
      );
    }),
  ];
}
