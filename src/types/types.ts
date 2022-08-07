import { RequestHandler, StartOptions } from "msw";
import { Handler } from "../demo-app/demo-app-types";

export type HttpSettings = {
  /** A function that accepts custom settings and returns an array of Mock Service Worker request handlers */
  requestHandlers: <TRequestHandlerConfig>(
    configRef: React.MutableRefObject<TRequestHandlerConfig | null>
  ) => RequestHandler[];

  /** Optional Mock Service worker start options */
  startOptions?: StartOptions;
};

export type CustomResponse = {
  /** Response handler name */
  handler: Handler;

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

/** Represents setting defaults */
export type DevToolsDefaults = {
  /** Set to true to enable closing DevTools by clicking outside the DevTools window by default */
  closeViaOutsideClick: boolean;

  /** When true, close the devtools window when the escape key is pressed */
  closeViaEscapeKey?: boolean;

  /** The default delay for mock HTTP requests */
  delay: number;

  /** The default DevTools window position */
  position: DevToolsPosition;

  /** Set to true to open the DevTools window by default */
  openByDefault: boolean;
};
