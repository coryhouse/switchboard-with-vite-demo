/** Return the devtools entry from the provided URL's querystring as an object */
export function getDevToolsSettingsFromUrlQuerystring(url: string) {
  const urlParams = new URLSearchParams(url);
  const devToolsQuery = urlParams.get("devtools");
  return devToolsQuery ? JSON.parse(devToolsQuery) : null;
}
