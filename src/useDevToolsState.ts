import { useEffect, useState } from "react";
import { getDevToolsSettingsFromUrlQuerystring } from "./utils/urlUtils";

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

function getDefault<T>(key: string, defaultValue: T) {
  return defaultValue;
}

export function useDevToolsState<T extends string | Array<string>>(
  key: string,
  defaultValue: T
) {
  const [state, setState] = useState<T>(() => getDefault<T>(key, defaultValue));

  useEffect(() => {
    // Check URL on first load
    function updateLocalStateAndLocalStorageWhenQueryStringChanges() {
      const settingsFromUrl = getDevToolsSettingsFromUrlQuerystring(
        window.location.search
      );
      if (settingsFromUrl) {
        setState(settingsFromUrl);
        localStorage.setItem("devtools", settingsFromUrl);
      }
    }
    updateLocalStateAndLocalStorageWhenQueryStringChanges;
  }, []);

  function getSettingsFromLocalStorage() {
    return localStorage.getItem("devtools");
  }

  /** Where the magic happens. This sets state in 3 spots:
   * 1. The URL's querystring
   * 2. localStorage
   * 3. local state variable
   *
   * Yes, typically a single system of record for a given piece of state is recommended.
   * But for devtools, it's best to keep these 3 in sync. Keeping the URL updated is useful
   * so it can be copied and shared with others at any point. Local state is necessary
   * so that any consumers of this hook receive the new state. And localStorage is useful
   * so the settings persist if the tab is reloaded or closed.
   */
  function setAllState(newState: any) {
    localStorage.setItem("devtools", newState);
    setState(newState);
  }

  const settingsInUrl = getDevToolsSettingsFromUrlQuerystring(
    window.location.search
  );
  if (settingsInUrl) setState(settingsInUrl);

  // Return an array that mirrors the API for plain useState
  return [state, setAllState];
}
