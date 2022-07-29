import { useEffect, useRef, useState } from "react";
import { setupWorker, rest, SetupWorkerApi } from "msw";
import { DevToolsConfig, Todo } from "./demo-app/types";
import { getRandomNumberBelow } from "./utils/numberUtils";

export const useWorker = (config: DevToolsConfig | null) => {
  const configRef = useRef(config);
  const [isReady, setIsReady] = useState(false);

  // Store the config in a ref so the useEffect below that starts
  // the worker runs only once, yet reads the latest config values
  // as they change in the devtools.
  useEffect(() => {
    configRef.current = config;
  }, [config]);

  // Returns the endpoints delay if one is specified
  // Falls back to global delay if one is specified.
  // Returns 0 otherwise.
  function getDelay(endpointDelay: number | undefined) {
    if (endpointDelay) return endpointDelay;
    if (configRef.current?.delay) return configRef.current?.delay;
    return 0;
  }

  function getResponseByLabel(label: string) {
    const resp = configRef.current?.mockApis.find((a) => a.label === label);
    if (!resp) throw new Error("Could not find getTodos config");
    return resp;
  }

  useEffect(() => {
    const worker = setupWorker(
      rest.get("/todos/:userId", async (_req, res, ctx) => {
        const { delay, status } = getResponseByLabel("getTodos");
        return res(
          ctx.delay(getDelay(delay)),
          ctx.json(configRef.current?.user.todos),
          ctx.status(status)
        );
      }),

      rest.post("/todo", async (req, res, ctx) => {
        const { todo } = await req.json();
        const resp: Todo = {
          // TODO: Perhaps use max todo id + 1
          id: getRandomNumberBelow(100000),
          completed: false,
          todo: todo as string,
        };
        return res(ctx.delay(configRef.current?.delay), ctx.json(resp));
      }),

      rest.post("/todo/:id", async (req, res, ctx) => {
        return res(ctx.delay(configRef.current?.delay), ctx.status(200));
      })
    );

    const startWorker = async (worker: SetupWorkerApi) => {
      await worker.start({
        onUnhandledRequest: ({ method, url }) => {
          if (
            url.pathname !== "/src/demo-app/CloseButton.tsx" &&
            url.pathname !== "/src/index.css" &&
            !url.pathname.startsWith("chrome-extension:")
          ) {
            throw new Error(`Unhandled ${method} request to ${url}`);
          }
        },
      });
      setIsReady(true);
    };

    startWorker(worker);
  }, []);

  return isReady;
};
