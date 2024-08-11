import { http } from "msw";
import { delayResponse, getUser } from "../mock-utils";

export const userHandlers = [
  http.get("/user", async () => {
    const user = getUser();
    if (!user)
      return new Response(null, {
        status: 401,
      });

    await delayResponse();
    return new Response(JSON.stringify(user.response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),
];
