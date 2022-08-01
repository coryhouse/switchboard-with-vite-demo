import { useEffect, useRef, useState } from "react";
import { setupWorker, rest, SetupWorkerApi } from "msw";
import { DevToolsConfig, Endpoint, Todo } from "./demo-app/types";
import { getRandomNumberBelow } from "./utils/number-utils";

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
  function getDelay(endpointDelay?: number) {
    if (endpointDelay) return endpointDelay;
    return configRef.current?.delay ?? 0;
  }

  function getHttpSetting(endpoint: Endpoint) {
    return configRef.current?.http.find((a) => a.endpoint === endpoint);
  }

  useEffect(() => {
    const worker = setupWorker(
      rest.get("/todos/:userId", async (_req, res, ctx) => {
        const setting = getHttpSetting("getTodos");
        return res(
          ctx.delay(getDelay(setting?.delay)),
          ctx.json(configRef.current?.user.todos),
          ctx.status(setting?.status ?? 200)
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
        const setting = getHttpSetting("addTodo");
        return res(
          ctx.delay(getDelay(setting?.delay)),
          ctx.json(resp),
          ctx.status(setting?.status ?? 200)
        );
      }),

      rest.put("/todo/:id", async (req, res, ctx) => {
        const setting = getHttpSetting("toggleTodoCompleted");
        return res(
          ctx.delay(getDelay(setting?.delay)),
          ctx.status(setting?.status ?? 200)
        );
      }),

      rest.delete("/todo/:id", async (req, res, ctx) => {
        const setting = getHttpSetting("deleteTodo");
        return res(
          ctx.delay(getDelay(setting?.delay)),
          ctx.status(setting?.status ?? 200)
        );
      })
    );

    const startWorker = async (worker: SetupWorkerApi) => {
      await worker.start({
        onUnhandledRequest: ({ method, url }) => {
          // Ignore these requests that need not be mocked
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
