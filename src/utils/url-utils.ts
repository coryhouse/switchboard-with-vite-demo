/** Returns a string that contains the current URL with DevTools settings included in the querystring */
export function getDevToolsUrl(url: URL, key: string, config: any = null) {
  const urlWithoutQuerystring = url.href.split("?")[0];
  const params = new URLSearchParams(url.search);
  // Remove existing querystring if it exists. Here's why:
  // 1. This assures the newly generated URL doesn't contain the param twice.
  // 2. We only add the param if a config value is provided,
  // so removing it cleans up the URL if no data has been provided for the key.
  params.delete(key);
  if (config) params.append(key, JSON.stringify(config));
  return urlWithoutQuerystring + "?" + params.toString();
}
