import { RequestHandler } from "msw";
import { getLoginHandlers } from "./login.handlers";
import { getTodoHandlers } from "./todo.handlers";
import { getUserHandlers } from "./user.handlers";

// Returns mock API request handlers.
export function requestHandlers(): RequestHandler[] {
  return [...getLoginHandlers(), ...getTodoHandlers(), ...getUserHandlers()];
}
