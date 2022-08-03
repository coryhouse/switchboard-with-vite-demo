/** Returns a string that contains the current URL with the specified key and  settings included in the querystring */
export function getDevToolsUrl(url: URL, key: string, value: any = null) {
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
