import { rest } from "msw";
import { HandlerConfig } from "../../demo-app-types";
import {
  getCustomResponseSettings,
  getDelay,
  getUserFromLocalStorage,
} from "../mock-utils";

export function getUserHandlers(config: HandlerConfig) {
  return [
    rest.get("/user", async (_req, res, ctx) => {
      const setting = getCustomResponseSettings(config, "GET /user");
      const user = getUserFromLocalStorage();
      if (!user) return res(ctx.status(401));

      return res(
        ctx.delay(getDelay(config, setting?.delay)),
        ctx.json(setting?.response ?? user.response),
        ctx.status(setting?.status ?? 200)
      );
    }),
  ];
}
