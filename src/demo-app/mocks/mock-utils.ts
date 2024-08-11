import { delay } from "msw";
import { CustomResponse } from "../../types/types";
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

export function getCustomResponseSettings(handler: Handler) {
  const customResponsesAsString = localStorage.getItem("customResponses");
  if (!customResponsesAsString) return null;
  // TODO: Use Zod to validate and type this data.
  const customResponses = JSON.parse(
    customResponsesAsString
  ) as CustomResponse[];
  return customResponses.find((r) => r.handler === handler);
}

export function getUser() {
  const userId = localStorage.getItem(userIdKey);
  const user = mockPersonas.find((u) => u.id === parseInt(userId!));
  return user;
}

export async function delayResponse() {
  const waitFor = parseInt(localStorage.getItem("delay") ?? "") || 0;
  await delay(waitFor);
}
