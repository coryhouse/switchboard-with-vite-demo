import { getRandomNumberBelow } from "../../../utils/number-utils";
import { RequestHandler, rest } from "msw";
import { HandlerConfig, Todo } from "../../demo-app-types";
import { getCustomResponseSettings, getDelay, getUser } from "../mock-utils";

export function getTodoHandlers(config: HandlerConfig): RequestHandler[] {
  return [
    rest.get("/todos", async (_req, res, ctx) => {
      const setting = getCustomResponseSettings(config, "GET /todos");
      const user = getUser(config);
      if (!user) return res(ctx.status(401));

      return res(
        ctx.delay(getDelay(config, setting?.delay)),
        ctx.json(setting?.response ?? user.response.todos),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.post("/todo", async (req, res, ctx) => {
      const { todo } = await req.json();
      const user = getUser(config);
      if (!user) return res(ctx.status(401));
      const defaultResp: Todo = {
        // TODO: Read the todos from memory so the reduce call below works.
        // They're in Todos.tsx's state, so how can we access them?
        // const maxTodoId = user.todos.reduce((max, t) => Math.max(max, t.id), 0);
        id: getRandomNumberBelow(100000),
        completed: false,
        todo: todo as string,
      };
      const setting = getCustomResponseSettings(config, "POST /todo");
      return res(
        ctx.delay(getDelay(config, setting?.delay)),
        ctx.json(setting?.response ?? defaultResp),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.put("/todo/:id", async (_req, res, ctx) => {
      const setting = getCustomResponseSettings(config, "PUT /todo/:id");
      return res(
        ctx.delay(getDelay(config, setting?.delay)),
        ctx.json(setting?.response ?? ""),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.delete("/todo/:id", async (_req, res, ctx) => {
      const setting = getCustomResponseSettings(config, "DELETE /todo/:id");
      return res(
        ctx.delay(getDelay(config, setting?.delay)),
        ctx.json(setting?.response ?? ""),
        ctx.status(setting?.status ?? 200)
      );
    }),
  ];
}
