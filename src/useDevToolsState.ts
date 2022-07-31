import { useEffect, useState } from "react";

/**
 * This hook makes it easy to declare state for devtools.
 * It's a fork of https://usehooks.com/useLocalStorage/,
 * but enhanced to read the URL as a way to override the specified default.
 * Since devtools often benefit from being initialized via the URL,
 * it reads the default value from the URL. And since it's handy
 * for the DevTools to "remember" settings between hard refreshes,
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
 * This hook writes each state change to 2 spots:
 * 1. localStorage
 * 2. local state variable
 *
 * Note that the URL is NOT updated as state values change. The URL is merely read to specify a default on initial load.
 *
 * @param key The URL param to check for the default, as well as the key used to write the value to localStorage
 * @param initialValue The default value to use if the URL and localStorage both don't have a matching value for the provided key.
 * */
export function useDevToolsState<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    // First, check the URL for a value and use it for the default if found
    // Convert the params to lowercase to avoid casing issues.
    const params = new URLSearchParams(window.location.search);
    const lowercaseParams = new URLSearchParams();
    for (const [name, value] of params) {
      lowercaseParams.append(name.toLowerCase(), value);
    }
    // Convert key to lowercase when comparing to avoid casing issues.
    const urlValue = lowercaseParams.get(key.toLowerCase());
    if (urlValue) {
      if (Number(urlValue)) return parseInt(urlValue);
      return urlValue;
    }

    // If URL doesn't contain the key, then fallback to checking localStorage for a default value
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue] as const;
}
