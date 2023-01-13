import { RequestHandler, rest } from "msw";
import { RequestHandlerConfig, Todo } from "../../demo-app-types";
import { getCustomResponseSettings, getDelay, getUser } from "../mock-utils";

// This local variable acts as an in-memory database.
// This way, unless the app is hard-reloaded, the latest todos will be returned by each mocked fetch.
let db: Todo[] = [];
let dbInitialized = false;

export function getTodoHandlers(
  configRef: React.MutableRefObject<RequestHandlerConfig>
): RequestHandler[] {
  return [
    rest.get("/todos", async (_req, res, ctx) => {
      const setting = getCustomResponseSettings(configRef, "GET /todos");
      const user = getUser(configRef);
      if (!user) return res(ctx.status(401));

      if (!dbInitialized) {
        db = [...user.response.todos];
        dbInitialized = true;
      }

      return res(
        ctx.delay(getDelay(configRef, setting?.delay)),
        ctx.json(setting?.response ?? db),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.post("/todo", async (req, res, ctx) => {
      const { todo } = await req.json();
      const user = getUser(configRef);
      if (!user) return res(ctx.status(401));
      const newTodo: Todo = {
        id: db.length + 1,
        completed: false,
        todo: todo as string,
      };
      const setting = getCustomResponseSettings(configRef, "POST /todo");
      db.push(newTodo);
      return res(
        ctx.delay(getDelay(configRef, setting?.delay)),
        ctx.json(setting?.response ?? newTodo),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.put("/todo/:id", async (req, res, ctx) => {
      const setting = getCustomResponseSettings(configRef, "PUT /todo/:id");
      db = db.map((todo) => {
        return todo.id === parseInt(req.params.id as string)
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
      return res(
        ctx.delay(getDelay(configRef, setting?.delay)),
        ctx.json(setting?.response ?? ""),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.delete("/todo/:id", async (_req, res, ctx) => {
      const setting = getCustomResponseSettings(configRef, "DELETE /todo/:id");
      db = db.filter((todo) => todo.id !== parseInt(_req.params.id as string));
      return res(
        ctx.delay(getDelay(configRef, setting?.delay)),
        ctx.json(setting?.response ?? ""),
        ctx.status(setting?.status ?? 200)
      );
    }),
  ];
}
