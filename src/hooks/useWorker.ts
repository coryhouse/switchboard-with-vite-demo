import { useEffect, useRef, useState } from "react";
import { setupWorker, rest, SetupWorkerApi } from "msw";
import { DevToolsConfig, Endpoint, Todo } from "../demo-app/types";
import { getRandomNumberBelow } from "../utils/number-utils";
import { mockUsers } from "../demo-app/mocks/users.mocks";

// TODO: Accept generic type for DevToolsConfig
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

  function getResp(customResponse: string | undefined, defaultResponse: any) {
    if (customResponse) return customResponse;
    return defaultResponse;
  }

  function getHttpSetting(endpoint: Endpoint) {
    return configRef.current?.http.find((a) => a.endpoint === endpoint);
  }

  // Draw attention to non-default values
  // Support reset to defaults

  useEffect(() => {
    const worker = setupWorker(
      // TODO: Extract and accept as an arg to the hook
      rest.post("/login", async (req, res, ctx) => {
        const setting = getHttpSetting("login");
        const { email, password } = await req.json();

        const user = mockUsers.find(
          (u) => u.email === email && u.password === password
        );
        if (!user) return res(ctx.status(401));

        return res(
          ctx.delay(getDelay(setting?.delay)),
          ctx.json(user),
          ctx.status(setting?.status ?? 200)
        );
      }),

      rest.get("/user", async (_req, res, ctx) => {
        const setting = getHttpSetting("getUser");

        const userId = configRef.current?.userId;
        const user = mockUsers.find((u) => u.id === userId);
        if (!user) return res(ctx.status(401));

        return res(
          ctx.delay(getDelay(setting?.delay)),
          ctx.json(getResp(setting?.response, user)),
          ctx.status(setting?.status ?? 200)
        );
      }),

      rest.get("/todos", async (_req, res, ctx) => {
        const setting = getHttpSetting("getTodos");

        const userId = configRef.current?.userId;
        const user = mockUsers.find((u) => u.id === userId);
        if (!user) throw new Error("User not found: " + userId);

        return res(
          ctx.delay(getDelay(setting?.delay)),
          ctx.json(getResp(setting?.response, user.todos)),
          ctx.status(setting?.status ?? 200)
        );
      }),

      rest.post("/todo", async (req, res, ctx) => {
        const { todo } = await req.json();
        const defaultResp: Todo = {
          // TODO: Perhaps use max todo id + 1
          id: getRandomNumberBelow(100000),
          completed: false,
          todo: todo as string,
        };
        const setting = getHttpSetting("addTodo");
        return res(
          ctx.delay(getDelay(setting?.delay)),
          ctx.json(getResp(setting?.response, defaultResp)),
          ctx.status(setting?.status ?? 200)
        );
      }),

      rest.put("/todo/:id", async (req, res, ctx) => {
        const setting = getHttpSetting("toggleTodoCompleted");
        return res(
          ctx.delay(getDelay(setting?.delay)),
          ctx.json(getResp(setting?.response, "")),
          ctx.status(setting?.status ?? 200)
        );
      }),

      rest.delete("/todo/:id", async (req, res, ctx) => {
        const setting = getHttpSetting("deleteTodo");
        return res(
          ctx.delay(getDelay(setting?.delay)),
          ctx.json(getResp(setting?.response, "")),
          ctx.status(setting?.status ?? 200)
        );
      })
    );

    const startWorker = async (worker: SetupWorkerApi) => {
      await worker.start({
        onUnhandledRequest: ({ method, url }) => {
          // Ignore these requests that need not be mocked
          // TODO: Extract and accept onUnhandledRequest (and other msw APIs) as an arg
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
