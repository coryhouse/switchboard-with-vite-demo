import { delay, http } from "msw";
import { RequestHandlerConfig } from "../../types/demo-app-types";
import { getCustomResponseSettings, getDelay } from "../mock-utils";
import { mockPersonas } from "../data/personas.mocks";
import { z } from "zod";

const loginResponseSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export function getLoginHandlers(
  configRef: React.MutableRefObject<RequestHandlerConfig>
) {
  return [
    http.post("/login", async ({ request }) => {
      const setting = getCustomResponseSettings(configRef, "POST /login");
      const { email, password } = loginResponseSchema.parse(
        await request.json()
      );

      const user = mockPersonas.find(
        ({ response: r }) => r.email === email && r.password === password
      );
      if (!user)
        return new Response(
          JSON.stringify({ errorMessage: `User not found` }),
          {
            status: 403,
          }
        );

      // TODO: Set cookie or JWT and pass it into all calls to show a more realistic approach
      await delay(getDelay(configRef, setting?.delay));
      return new Response(JSON.stringify(user.response), {
        status: setting?.status ?? 200,
        headers: { "Content-Type": "application/json" },
      });
    }),
  ];
}
