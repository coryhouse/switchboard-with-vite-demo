import { getRandomNumberBelow } from "../../utils/number-utils.js";
import { RequestHandler, delay, http } from "msw";
import { RequestHandlerConfig, Todo } from "../../types/demo-app-types.js";
import { getCustomResponseSettings, getDelay, getUser } from "../mock-utils.js";
import { z } from "zod";

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

      return new Response(
        setting?.response ?? JSON.stringify(user.response.todos),
        {
          status: setting?.status ?? 200,
          headers: { "Content-Type": "application/json" },
        }
      );
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
      const defaultResp: Todo = {
        // TODO: Read the todos from memory so the reduce call below works.
        // They're in Todos.tsx's state, so how can we access them?
        // const maxTodoId = user.todos.reduce((max, t) => Math.max(max, t.id), 0);
        id: getRandomNumberBelow(100000),
        completed: false,
        todo,
      };

      const setting = getCustomResponseSettings(configRef, "POST /todo");
      await delay(getDelay(configRef, setting?.delay));
      return new Response(setting?.response ?? JSON.stringify(defaultResp), {
        status: setting?.status ?? 200,
        headers: { "Content-Type": "application/json" },
      });
    }),

    http.put("/todo/:id", async () => {
      const setting = getCustomResponseSettings(configRef, "PUT /todo/:id");
      await delay(getDelay(configRef, setting?.delay));
      return new Response(setting?.response ?? "", {
        status: setting?.status ?? 200,
      });
    }),

    http.delete("/todo/:id", async () => {
      const setting = getCustomResponseSettings(configRef, "DELETE /todo/:id");
      await delay(getDelay(configRef, setting?.delay));

      return new Response(setting?.response ?? "", {
        status: setting?.status ?? 200,
      });
    }),
  ];
}
