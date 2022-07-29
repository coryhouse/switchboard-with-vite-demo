import { describe, it, expect } from "vitest";
import { getDevToolsSettingsFromUrlQuerystring } from "./url-utils";

describe("urlUtils", () => {
  describe("getDevToolsSettingsFromUrlQuerystring", () => {
    describe("given the URL's querystring contains settings under the 'devtools' key", () => {
      it("returns the settings as an object", () => {
        const settings = { showUser: true, eatChili: false };
        const encodedQuerystring = window.encodeURI(JSON.stringify(settings));
        const urlQuery = "?settingToIgnore=true&devtools=" + encodedQuerystring;
        const result = getDevToolsSettingsFromUrlQuerystring(urlQuery);
        expect(JSON.stringify(result)).toEqual(JSON.stringify(settings));
      });
    });
  });
});
