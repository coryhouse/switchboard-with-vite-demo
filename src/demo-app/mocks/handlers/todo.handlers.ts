import { getRandomNumberBelow } from "../../../utils/number-utils";
import { RequestHandler, rest } from "msw";
import { RequestHandlerConfig, Todo } from "../../demo-app-types";
import { getCustomResponseSettings, getDelay, getUser } from "../mock-utils";

export function getTodoHandlers(
  configRef: React.MutableRefObject<RequestHandlerConfig>
): RequestHandler[] {
  return [
    rest.get("/todos", async (_req, res, ctx) => {
      const setting = getCustomResponseSettings(configRef, "GET /todos");
      const user = getUser(configRef);
      if (!user) return res(ctx.status(401));

      return res(
        ctx.delay(getDelay(configRef, setting?.delay)),
        ctx.json(setting?.response ?? user.response.todos),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.post("/todo", async (req, res, ctx) => {
      const { todo } = await req.json();
      const user = getUser(configRef);
      if (!user) return res(ctx.status(401));
      const defaultResp: Todo = {
        // TODO: Read the todos from memory so the reduce call below works.
        // They're in Todos.tsx's state, so how can we access them?
        // const maxTodoId = user.todos.reduce((max, t) => Math.max(max, t.id), 0);
        id: getRandomNumberBelow(100000),
        completed: false,
        todo: todo as string,
      };
      const setting = getCustomResponseSettings(configRef, "POST /todo");
      return res(
        ctx.delay(getDelay(configRef, setting?.delay)),
        ctx.json(setting?.response ?? defaultResp),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.put("/todo/:id", async (_req, res, ctx) => {
      const setting = getCustomResponseSettings(configRef, "PUT /todo/:id");
      return res(
        ctx.delay(getDelay(configRef, setting?.delay)),
        ctx.json(setting?.response ?? ""),
        ctx.status(setting?.status ?? 200)
      );
    }),

    rest.delete("/todo/:id", async (_req, res, ctx) => {
      const setting = getCustomResponseSettings(configRef, "DELETE /todo/:id");
      return res(
        ctx.delay(getDelay(configRef, setting?.delay)),
        ctx.json(setting?.response ?? ""),
        ctx.status(setting?.status ?? 200)
      );
    }),
  ];
}
