import { Handler, RequestHandlerConfig } from "../demo-app-types";
import { mockPersonas } from "./data/personas.mocks";

// Returns the endpoints delay if one is specified
// Falls back to global delay if one is specified.
// Returns 0 otherwise.
export function getDelay(
  configRef: React.MutableRefObject<RequestHandlerConfig>,
  endpointDelay?: number
) {
  if (endpointDelay) return endpointDelay;
  return configRef.current?.delay ?? 0;
}

export function getCustomResponseSettings(
  configRef: React.MutableRefObject<RequestHandlerConfig>,
  handler: Handler
) {
  return configRef.current?.customResponses.find((r) => r.handler === handler);
}

export function getUserFromLocalStorage() {
  const userId = localStorage.getItem("userId");
  if (userId === null) throw new Error("userId not found in localStorage");
  if (!parseInt(userId))
    throw new Error("userId in localStorage is not a number");
  const user = mockPersonas.find((u) => u.id === parseInt(userId));
  if (!user) throw new Error("User not found in localStorage: " + userId);
  return user;
}

export function getUser(
  configRef: React.MutableRefObject<RequestHandlerConfig>
) {
  const userId = configRef.current?.userId;
  return mockPersonas.find((u) => u.id === userId);
}
