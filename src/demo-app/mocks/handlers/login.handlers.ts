import { http } from "msw";
import { getCustomResponseSettings } from "../mock-utils";
import { mockPersonas } from "../data/personas.mocks";
import { z } from "zod";

const loginResponseSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const loginHandlers = [
  http.post("/login", async ({ request }) => {
    const setting = await getCustomResponseSettings("POST /login");
    const { email, password } = loginResponseSchema.parse(await request.json());

    const user = mockPersonas.find(
      ({ response: r }) => r.email === email && r.password === password
    );
    if (!user)
      return new Response(JSON.stringify({ errorMessage: `User not found` }), {
        status: 403,
      });

    // TODO: Set cookie or JWT and pass it into all calls to show a more realistic approach
    return new Response(JSON.stringify(setting?.response ?? user.response), {
      status: setting?.status ?? 200,
      headers: { "Content-Type": "application/json" },
    });
  }),
];
