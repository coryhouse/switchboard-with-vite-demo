import { DevToolsConfig } from "../demo-app/types";

/** Return the devtools entry from the provided URL's querystring as an object */
export function getDevToolsSettingsFromUrlQuerystring(
  url: string
): DevToolsConfig | null {
  const urlParams = new URLSearchParams(url);
  const devToolsQuery = urlParams.get("devtools");
  if (!devToolsQuery) return null;
  try {
    const settings = JSON.parse(
      decodeURIComponent(devToolsQuery)
    ) as DevToolsConfig;
    return settings;
  } catch (err) {
    console.error(err);
    throw new Error(
      "Parsing the querystring's devtools setting failed. The querystring is likely malformed."
    );
  }
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
