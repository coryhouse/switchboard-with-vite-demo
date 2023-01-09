import { rest } from "msw";
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
    rest.get("/user", async (_req, res, ctx) => {
      const setting = getCustomResponseSettings(configRef, "GET /user");
      const user = getUserFromLocalStorage();
      if (!user) return res(ctx.status(401));

      return res(
        ctx.delay(getDelay(configRef, setting?.delay)),
        ctx.json(setting?.response ?? user.response),
        ctx.status(setting?.status ?? 200)
      );
    }),
  ];
}
