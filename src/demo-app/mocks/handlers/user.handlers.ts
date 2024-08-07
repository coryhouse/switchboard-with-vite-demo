import { http } from "msw";
import { delayResponse, getUserFromLocalStorage } from "../mock-utils";

export function getUserHandlers() {
  return [
    http.get("/user", async () => {
      const user = getUserFromLocalStorage();
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
}
