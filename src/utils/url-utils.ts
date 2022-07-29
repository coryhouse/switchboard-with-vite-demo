import { DevToolsConfig } from "../demo-app/types";

/** Return the devtools entry from the provided URL's querystring as an object */
export function getDevToolsSettingsFromUrlQuerystring(
  url: string
): DevToolsConfig | null {
  const urlParams = new URLSearchParams(url);
  const devToolsQuery = urlParams.get("devtools");
  return devToolsQuery
    ? (JSON.parse(decodeURI(devToolsQuery)) as DevToolsConfig)
    : null;
}

/** Returns a string that contains the current URL with devtools settings included in the querystring */
export function buildUrlWithDevtoolsSettings(
  location: Location,
  devToolsConfig: DevToolsConfig
) {
  const urlWithoutQuerystring = location.href.split("?")[0];
  const params = new URLSearchParams(location.search);
  params.append("devtools", encodeURI(JSON.stringify(devToolsConfig)));
  return urlWithoutQuerystring + "?" + params.toString();
}
