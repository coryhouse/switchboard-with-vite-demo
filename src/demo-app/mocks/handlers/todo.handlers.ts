import { getRandomNumberBelow } from "../../../utils/number-utils";
import { RequestHandler, delay, http } from "msw";
import { RequestHandlerConfig, Todo } from "../../demo-app-types";
import { getCustomResponseSettings, getDelay, getUser } from "../mock-utils";
import { z } from "zod";

// Simulate DB via an in-memory array.
let todosDb: Todo[] = [];
let todosInitialized = false;

export function getTodoHandlers(
  configRef: React.MutableRefObject<RequestHandlerConfig>
): RequestHandler[] {
  return [
    http.get("/todos", async () => {
      const setting = getCustomResponseSettings(configRef, "GET /todos");
      const user = getUser(configRef);
      if (!user)
        return new Response(null, {
          status: 401,
        });

      await delay(getDelay(configRef, setting?.delay));

      if (!todosInitialized) {
        todosDb = user.response.todos;
        todosInitialized = true;
      }
      const todoResponse = setting?.response ?? JSON.stringify(todosDb);

      return new Response(todoResponse, {
        status: setting?.status ?? 200,
        headers: { "Content-Type": "application/json" },
      });
    }),

    http.post("/todo", async ({ request }) => {
      const todoResponseSchema = z.object({
        todo: z.string(),
      });
      const { todo } = todoResponseSchema.parse(await request.json());
      const user = getUser(configRef);
      if (!user)
        return new Response(null, {
          status: 401,
        });
      const newTodo: Todo = {
        // TODO: Read the todos from memory so the reduce call below works.
        // They're in Todos.tsx's state, so how can we access them?
        // const maxTodoId = user.todos.reduce((max, t) => Math.max(max, t.id), 0);
        id: getRandomNumberBelow(100000),
        completed: false,
        todo,
      };

      const setting = getCustomResponseSettings(configRef, "POST /todo");
      await delay(getDelay(configRef, setting?.delay));

      const status = setting?.status ?? 200;
      if (status === 200) todosDb.push(newTodo);
      console.log("Add");
      return new Response(setting?.response ?? JSON.stringify(newTodo), {
        status,
        headers: { "Content-Type": "application/json" },
      });
    }),

    http.put("/todo/:id", async ({ params }) => {
      const setting = getCustomResponseSettings(configRef, "PUT /todo/:id");
      await delay(getDelay(configRef, setting?.delay));
      todosDb = todosDb.map((t) => {
        if (t.id === parseInt(params.id as string)) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
      return new Response(setting?.response ?? "", {
        status: setting?.status ?? 200,
      });
    }),

    http.delete("/todo/:id", async ({ params }) => {
      const setting = getCustomResponseSettings(configRef, "DELETE /todo/:id");
      await delay(getDelay(configRef, setting?.delay));
      todosDb = todosDb.filter((t) => t.id !== parseInt(params.id as string));

      return new Response(setting?.response ?? "", {
        status: setting?.status ?? 200,
      });
    }),
  ];
}
