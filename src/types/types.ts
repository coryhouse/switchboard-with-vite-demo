import { RequestHandler, StartOptions } from "msw";

export type HttpSettings = {
  /** A function that accepts custom settings and returns an array of Mock Service Worker request handlers */
  generateRequestHandlers: <TRequestHandlerConfig>(
    configRef: React.MutableRefObject<TRequestHandlerConfig | null>
  ) => RequestHandler[];

  /** Array of endpoint names */
  endpoints: string[];

  /** Optional Mock Service worker start options */
  startOptions?: StartOptions;
};

export type CustomResponse = {
  /** Endpoint name */
  endpointName: string;

  /** Delay the response by a specified number of milliseconds. */
  delay?: number;

  /** HTTP status code to return for this call */
  status?: number;

  /** Optional response. */
  response?: string;
};

export interface DevToolsConfigBase {
  /** Set to true to open the DevTools window by default */
  openByDefault: boolean;

  /** DevTools window position */
  position: DevToolsPosition;

  /** Global HTTP delay */
  delay: number;

  /** Array of custom responses */
  customResponses: CustomResponse[];

  /** Set to true to automatically hard reload the app when DevTools settings change */
  // autoReload: boolean;
}

/** Base type for RequestHandler config */
export interface RequestHandlerConfigBase {
  /** Global HTTP delay */
  delay: number;

  /** Array of custom responses */
  customResponses: CustomResponse[];
}

export const devToolsPositions = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
] as const;

/** Union of devTools positions. */
export type DevToolsPosition = typeof devToolsPositions[number];
