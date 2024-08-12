import { delay } from "msw";
import { Handler } from "../demo-app-types";
import { mockPersonas } from "./data/personas.mocks";
import { userIdKey } from "../constants/localStorage.constants";
import { CustomResponse } from "react-switchboard";

// TODO: Move helper for all/some of this to Switchboard?
export async function getCustomResponseSettings(handler: Handler) {
  const customResponsesAsString = localStorage.getItem("sb-customResponses");
  if (!customResponsesAsString) return null;
  // TODO: Use Zod to validate and type this data.
  const customResponses = JSON.parse(
    customResponsesAsString
  ) as CustomResponse[];

  const customResponseSettings = customResponses.find(
    (r) => r.handler === handler
  );

  const globalDelay = localStorage.getItem("sb-delay");

  // If a delay is configured, apply it before returning settings so we automatically handle delay for all requests.
  // Apply the custom response's delay, if any, the global delay, if any, or fallback to 0 if neither.
  await delay(
    customResponseSettings?.delay ?? (globalDelay ? parseInt(globalDelay) : 0)
  );

  return customResponseSettings;
}

export function getUser() {
  const userId = localStorage.getItem(userIdKey);
  const user = mockPersonas.find((u) => u.id === parseInt(userId!));
  return user;
}
