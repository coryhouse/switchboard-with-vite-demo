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

/** Returns a string that contains the current URL with DevTools settings included in the querystring */
export function getDevToolsUrl(url: URL, config: any) {
  const urlWithoutQuerystring = url.href.split("?")[0];
  const params = new URLSearchParams(url.search);
  // Remove existing querystring if it exists. This assures the newly generated URL only contains the devtools querystring once.
  params.delete("devtools");
  params.append("devtools", encodeURIComponent(JSON.stringify(config)));
  return urlWithoutQuerystring + "?" + params.toString();
}
