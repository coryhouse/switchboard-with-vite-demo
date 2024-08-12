import { RequestHandler } from "msw";
import { loginHandlers } from "./login.handlers";
import { todoHandlers } from "./todo.handlers";
import { userHandlers } from "./user.handlers";

// Returns mock API request handlers.
export function requestHandlers(): RequestHandler[] {
  return [...loginHandlers, ...todoHandlers, ...userHandlers];
}
