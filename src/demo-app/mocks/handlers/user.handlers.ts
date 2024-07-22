import { delay, http } from "msw";
import { RequestHandlerConfig } from "../../demo-app-types";
import {
  getCustomResponseSettings,
  getDelay,
  getUserFromLocalStorage,
} from "../mock-utils";

export function getUserHandlers(
  configRef: React.MutableRefObject<RequestHandlerConfig>
) {
  return [
    http.get("/user", async () => {
      const setting = getCustomResponseSettings(configRef, "GET /user");
      const user = getUserFromLocalStorage();
      if (!user)
        return new Response(null, {
          status: 401,
        });

      await delay(getDelay(configRef, setting?.delay));
      return new Response(setting?.response ?? JSON.stringify(user.response), {
        status: setting?.status ?? 200,
        headers: { "Content-Type": "application/json" },
      });
    }),
  ];
}
