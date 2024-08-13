import { DevToolsConfig } from "../src/demo-app/demo-app-types";

/** Build a URL that contains a querystring key/value pair for each
 * populated property in the provided config. By convention, each property
 * name is mapped to the querystring's key.
 */
export function buildUrl(baseUrl: string, config: Partial<DevToolsConfig>) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(config)) {
    params.append("sb-" + key, JSON.stringify(value));
  }
  return baseUrl + "?" + params.toString();
}
