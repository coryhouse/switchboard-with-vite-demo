/** Returns a string that contains the current URL with DevTools settings included in the querystring */
export function getDevToolsUrl(url: URL, key: string, config: any) {
  const urlWithoutQuerystring = url.href.split("?")[0];
  const params = new URLSearchParams(url.search);
  // Remove existing querystring if it exists. This assures the newly generated URL only contains the devtools querystring once.
  params.delete(key);
  params.append(key, JSON.stringify(config));
  return urlWithoutQuerystring + "?" + params.toString();
}
