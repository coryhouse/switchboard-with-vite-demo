import { useEffect, useRef, useState } from "react";
import { setupWorker } from "msw";
import { HttpSettings } from "../types/types";

/** Start Mock Service Worker with the provided config and return true when ready. */
export const useWorker = <TCustomSettings>(
  { startOptions, requestHandlers }: HttpSettings,
  config: TCustomSettings
) => {
  const [isReady, setIsReady] = useState(false);
  const workerRef = useRef(setupWorker(...requestHandlers(config)));
  // Store the previous config in a ref so we can compare it to the current config, so we know if the config has changed.
  const prevConfig = useRef(config);

  if (!isReady) {
    workerRef.current.start(startOptions).then(() => setIsReady(true));
  }

  useEffect(() => {
    // If the config changed, apply it.
    if (prevConfig.current !== config) {
      prevConfig.current === config;
      workerRef.current.use(...requestHandlers(config));
    }
  }, [config, requestHandlers, startOptions]);

  return isReady;
};
