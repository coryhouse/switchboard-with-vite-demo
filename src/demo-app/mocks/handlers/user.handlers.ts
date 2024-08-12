import { http } from "msw";
import { getCustomResponseSettings, getUser } from "../mock-utils";

export const userHandlers = [
  http.get("/user", async () => {
    const setting = await getCustomResponseSettings("GET /user");
    const user = getUser();
    if (!user)
      return new Response(null, {
        status: 401,
      });

    return new Response(JSON.stringify(setting?.response ?? user.response), {
      status: setting?.status ?? 200,
      headers: { "Content-Type": "application/json" },
    });
  }),
];
