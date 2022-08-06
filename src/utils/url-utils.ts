/** Returns a string that contains the current URL with the specified key and value in the querystring */
export function getUrlWithUpdatedQuery(
  url: URL,
  key: string,
  value: any = null
) {
  const urlWithoutQuerystring = url.href.split("?")[0];
  const params = new URLSearchParams(url.search);
  // Remove existing querystring if it exists. Here's why:
  // 1. This assures the newly generated URL doesn't contain the param twice.
  // 2. We only add the param if a value is provided,
  // so removing it cleans up the URL if no value has been provided for the key.
  params.delete(key);
  if (value) params.append(key, JSON.stringify(value));
  return urlWithoutQuerystring + "?" + params.toString();
}

/** Build a URL that contains a querystring key/value pair for each
 * populated property in the provided config. By convention, each property
 * name is mapped to the querystring's key.
 */
export function buildUrl<TDevToolsConfig>(
  baseUrl: string,
  config: Partial<TDevToolsConfig>
) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(config)) {
    if (value) params.append(key, JSON.stringify(value));
  }
  return baseUrl + "?" + params.toString();
}
