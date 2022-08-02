import { DevToolsConfig } from "../../src/demo-app/types";
import { getDevToolsUrl } from "../../src/utils/url-utils";
import { defaultConfig } from "../../src/demo-app/AppWithDevTools";

const baseUrl = new URL("http://127.0.0.1:5173/");

// Returns a URL with the specified DevToolsConfig in the querystring.
export function getUrl(config: Partial<DevToolsConfig>) {
  return getDevToolsUrl(baseUrl, {
    ...defaultConfig,
    ...config,
  });
}
