import { http } from "msw";
import { delayResponse, getCustomResponseSettings } from "../mock-utils";
import { mockPersonas } from "../data/personas.mocks";
import { z } from "zod";

const loginResponseSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export function getLoginHandlers() {
  return [
    http.post("/login", async ({ request }) => {
      const setting = getCustomResponseSettings("POST /login");
      const { email, password } = loginResponseSchema.parse(
        await request.json()
      );

      await delayResponse();

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
      return new Response(JSON.stringify(user.response), {
        status: setting?.status ?? 200,
        headers: { "Content-Type": "application/json" },
      });
    }),
  ];
}
