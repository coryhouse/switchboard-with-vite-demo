import { useEffect, useRef, useState } from "react";
import { setupWorker } from "msw";
import { HttpSettings } from "../types/types";

/** Start Mock Service Worker with the provided config and return true when ready. */
export const useWorker = <TCustomSettings>(
  { startOptions, requestHandlers }: HttpSettings,
  config: TCustomSettings
) => {
  const configRef = useRef(config);
  const workerRef = useRef(setupWorker(...requestHandlers(config)));
  const [isReady, setIsReady] = useState(false);

  // Store the config in a ref so the useEffect below that starts
  // the worker runs only once, yet reads the latest config values
  // as they change in the devtools.
  useEffect(() => {
    configRef.current = config;
  }, [config]);

  // Store the previous config in a ref so we can compare it to the current config
  // This way, we know if the config has changed.
  const prevConfig = useRef<TCustomSettings | undefined>(undefined);

  if (!isReady) {
    workerRef.current.start(startOptions).then(() => {
      setIsReady(true);
    });
  }

  useEffect(
    function updateWorker() {
      // This only needs to re-run if the config has changed so the new settings apply.
      if (prevConfig.current === config) return;
      prevConfig.current === config;
      workerRef.current.use(...requestHandlers(config));
    },
    [config, requestHandlers, startOptions]
  );

  return isReady;
};
