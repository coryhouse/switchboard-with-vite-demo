import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });

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
    params.append(key, JSON.stringify(value));
  }
  return baseUrl + "?" + params.toString();
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
