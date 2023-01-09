import { rest } from "msw";
import { RequestHandlerConfig } from "../../demo-app-types";
import { getCustomResponseSettings, getDelay } from "../mock-utils";
import { mockPersonas } from "../data/personas.mocks";

export function getLoginHandlers(
  configRef: React.MutableRefObject<RequestHandlerConfig>
) {
  return [
    rest.post("/login", async (req, res, ctx) => {
      const setting = getCustomResponseSettings(configRef, "POST /login");
      const { email, password } = await req.json();

      const user = mockPersonas.find(
        ({ response: r }) => r.email === email && r.password === password
      );
      if (!user)
        return res(
          ctx.status(403),
          ctx.json({
            errorMessage: `User not found`,
          })
        );

      // TODO: Set cookie or JWT and pass it into all calls to show a more realistic approach
      return res(
        ctx.delay(getDelay(configRef, setting?.delay)),
        ctx.json(user.response),
        ctx.status(setting?.status ?? 200)
      );
    }),
  ];
}
