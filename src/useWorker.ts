import { useEffect, useRef, useState } from "react";
import { setupWorker, rest, SetupWorkerApi } from "msw";
import { DevToolsConfig, Todo } from "./demo-app/types";
import { getRandomNumberBelow } from "./utils/numberUtils";

export const useWorker = (persona: DevToolsConfig | null) => {
  const savedPersona = useRef(persona);

  useEffect(() => {
    savedPersona.current = persona;
  }, [persona]);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const worker = setupWorker(
      rest.get("/todos", (_req, res, ctx) => {
        const resp: Todo[] = [
          {
            id: 1,
            completed: false,
            todo: "Eat lunch",
          },
        ];
        return res(ctx.json(resp));
      }),
      rest.post("/todo", async (req, res, ctx) => {
        const { todo } = await req.json();
        const resp: Todo = {
          // TODO: Perhaps use max todo id + 1
          id: getRandomNumberBelow(100000),
          completed: false,
          todo: todo as string,
        };
        return res(ctx.json(resp));
      }),
      rest.post("/todo/:id", async (req, res, ctx) => {
        return res(ctx.status(200));
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
