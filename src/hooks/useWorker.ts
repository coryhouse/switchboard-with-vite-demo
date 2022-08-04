import { useEffect, useRef, useState } from "react";
import { setupWorker, SetupWorkerApi, RequestHandler } from "msw";
import { DevToolsConfig } from "../demo-app/types";

// TODO: Accept generic type for DevToolsConfig
export const useWorker = (
  config: DevToolsConfig | null,
  requestHandlers: (
    configRef: React.MutableRefObject<DevToolsConfig | null>
  ) => RequestHandler[]
) => {
  const configRef = useRef(config);
  const [isReady, setIsReady] = useState(false);

  // Store the config in a ref so the useEffect below that starts
  // the worker runs only once, yet reads the latest config values
  // as they change in the devtools.
  useEffect(() => {
    configRef.current = config;
  }, [config]);

  useEffect(() => {
    const worker = setupWorker(...requestHandlers(configRef));

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
