import { useEffect, useState } from "react";

/**
 * This hook makes it easy to declare state for devtools.
 * Since devtools often benefit from being initialized via the URL,
 * it reads the default value from the URL. And since it's handy
 * for the devtools to "remember" settings between hard refreshes,
 * it writes settings to localStorage onChange.
 *
 * Finally, if neither the URL or localStorage is set, it falls back
 * to the provided default.
 * It sets the default value in the following order:
 * 1. URL
 * 2. localStorage
 * 3. Specified default
 *
 * So, in other words, if the URL isn't provided, it falls back to localStorage.
 * If localStorage isn't set, it falls back to the specified default.
 *
 * This hook writes each state change to 3 spots:
 * 1. The URL's querystring
 * 2. localStorage
 * 3. local state variable  */
export function useDevToolsState(key: string, defaultValue: string) {
  const [state, setState] = useState();

  useEffect(() => {
    function updateLocalStateAndLocalStorageWhenQueryStringChanges() {
      const settingsFromUrl = getSettingsFromUrl();
      setState(settingsFromUrl);
    }
  });

  function getSettingsFromUrl() {
    // via https://stackoverflow.com/a/901144/26180
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, key) => searchParams.get(key.toString()),
    });
    const devToolsSettingsInUrl = params.get("devtools");
    return devToolsSettingsInUrl;
  }

  function getSettingsFromLocalStorage() {
    return localStorage.getItem("devtools");
  }

  /** Where the magic happens. This sets state in 3 spots:
   * 1. The URL's querystring
   * 2. localStorage
   * 3. local state variable
   */
  function setStateInUrlAndLocalStorageAndLocally(newState: any) {
    setState(newState);
    localStorage.setItem("devtools", newState);
  }

  const settingsInUrl = getSettingsFromUrl();
  if (settingsInUrl) setState(settingsInUrl);

  // Return an array that mirrors the API for plain useState
  return [state, setStateInUrlAndLocalStorageAndLocally];
}
