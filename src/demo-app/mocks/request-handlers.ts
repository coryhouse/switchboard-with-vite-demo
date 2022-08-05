import { RequestHandler, rest } from "msw";
import { getRandomNumberBelow } from "../../utils/number-utils";
import { DevToolsConfig, Endpoint, Todo } from "../types";
import { mockUsers } from "./users.mocks";

export function requestHandlers(
  configRef: React.MutableRefObject<DevToolsConfig | null>
): RequestHandler[] {
  // Returns the endpoints delay if one is specified
  // Falls back to global delay if one is specified.
  // Returns 0 otherwise.
  function getDelay(endpointDelay?: number) {
    if (endpointDelay) return endpointDelay;
    return configRef.current?.delay ?? 0;
  }

  function getHttpSetting(endpoint: Endpoint) {
    return configRef.current?.http.find((a) => a.endpoint === endpoint);
  }

  // Get user by reading localStorage
  function getUser() {
    const userId = localStorage.getItem("userId");
    if (userId === null) throw new Error("userId not found in localStorage");
    if (!parseInt(userId))
      throw new Error("userId in localStorage is not a number");
    const user = mockUsers.find((u) => u.id === parseInt(userId));
    if (!user) throw new Error("User not found: " + userId);
    return user;
  }

  return [
    // TODO: Extract and accept as an arg to the hook
    rest.post("/login", async (req, res, ctx) => {
      const setting = getHttpSetting("login");
      const { email, password } = await req.json();

      const user = mockUsers.find(
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
      const setting = getHttpSetting("getUser");

      const userId = configRef.current?.userId;
      const user = mockUsers.find((u) => u.id === userId);
      if (!user) return res(ctx.status(401));

      return res(
        ctx.delay(getDelay(setting?.delay)),
        ctx.json(setting?.response ?? user),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.get("/todos", async (_req, res, ctx) => {
      const setting = getHttpSetting("getTodos");
      const user = getUser();
      return res(
        ctx.delay(getDelay(setting?.delay)),
        ctx.json(setting?.response ?? user.todos),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.post("/todo", async (req, res, ctx) => {
      const { todo } = await req.json();
      const defaultResp: Todo = {
        // TODO: Perhaps use max todo id + 1
        id: getRandomNumberBelow(100000),
        completed: false,
        todo: todo as string,
      };
      const setting = getHttpSetting("addTodo");
      return res(
        ctx.delay(getDelay(setting?.delay)),
        ctx.json(setting?.response ?? defaultResp),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.put("/todo/:id", async (req, res, ctx) => {
      const setting = getHttpSetting("toggleTodoCompleted");
      return res(
        ctx.delay(getDelay(setting?.delay)),
        ctx.json(setting?.response ?? ""),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.delete("/todo/:id", async (req, res, ctx) => {
      const setting = getHttpSetting("deleteTodo");
      return res(
        ctx.delay(getDelay(setting?.delay)),
        ctx.json(setting?.response ?? ""),
        ctx.status(setting?.status ?? 200)
      );
    }),
  ];
}
