import { delay } from "msw";
import { Handler } from "../demo-app-types";
import { mockPersonas } from "./data/personas.mocks";
import { userIdKey } from "../constants/localStorage.constants";
import { CustomResponse } from "react-switchboard";

export function getCustomResponseSettings(handler: Handler) {
  const customResponsesAsString = localStorage.getItem("sb-customResponses");
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
