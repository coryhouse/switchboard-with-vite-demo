import { useRef, useState } from "react";
import { setupWorker } from "msw";
import { HttpSettings } from "../types/types";

/** Start Mock Service Worker with the provided config and return true when ready. */
export const useWorker = <TCustomSettings>(
  { startOptions, requestHandlers }: HttpSettings,
  config: TCustomSettings
) => {
  const isStarted = useRef(false);
  const [isReady, setIsReady] = useState(false);
  const workerRef = useRef(setupWorker(...requestHandlers(config)));

  if (!isStarted.current) {
    isStarted.current = true;
    workerRef.current.start(startOptions).then(() => setIsReady(true));
  }

  // Make the `worker` and `rest` references available globally,
  // so they can be accessed in both runtime and test suites.
  // window.msw = {
  //   worker,
  //   rest,
  // };

  return isReady;
};
