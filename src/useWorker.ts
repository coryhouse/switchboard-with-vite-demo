import { useEffect, useState } from "react";
import { setupWorker, rest, SetupWorkerApi } from "msw";
import { DevToolsConfig, Todo } from "./demo-app/types";
import { getRandomNumberBelow } from "./utils/numberUtils";

export const useWorker = (config: DevToolsConfig | null) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const worker = setupWorker(
      rest.get("/todos/:userId", (_req, res, ctx) => {
        return res(ctx.delay(config?.httpDelay), ctx.json(config?.user));
      }),
      rest.post("/todo", async (req, res, ctx) => {
        const { todo } = await req.json();
        const resp: Todo = {
          // TODO: Perhaps use max todo id + 1
          id: getRandomNumberBelow(100000),
          completed: false,
          todo: todo as string,
        };
        return res(ctx.delay(config?.httpDelay), ctx.json(resp));
      }),
      rest.post("/todo/:id", async (req, res, ctx) => {
        return res(ctx.delay(config?.httpDelay), ctx.status(200));
      })
    );

    const startWorker = async (worker: SetupWorkerApi) => {
      await worker.start();
      setIsReady(true);
    };

    startWorker(worker);

    return () => {
      worker.stop();
    };
  }, []);

  return isReady;
};
