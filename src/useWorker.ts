import { useEffect, useRef, useState } from "react";
import { setupWorker, rest } from "msw";
import { SetupWorkerApi } from "msw/lib/types/setupWorker/glossary";
import { DevToolsOptions } from "./DevToolsOptions.types";

export const useWorker = (persona: DevToolsOptions | null) => {
  const savedPersona = useRef(persona);

  useEffect(() => {
    savedPersona.current = persona;
  }, [persona]);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const worker = setupWorker(
      rest.get("/todos", (_req, res, ctx) => {
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
