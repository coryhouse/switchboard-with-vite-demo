import { useEffect, useRef, useState } from "react";
import { setupWorker, rest, SetupWorkerApi } from "msw";
import { DevToolsConfig, Todo } from "./demo-app/types";

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
        res(ctx.json(resp));
      }),
      rest.post("/todos", (_req, res, ctx) => {
        return savedPersona.current?.todoResponse === "success"
          ? res(ctx.status(201))
          : res(ctx.status(500, "Mocked error"));
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
