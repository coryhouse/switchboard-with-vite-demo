import { delay } from "msw";

export async function delayResponse() {
  const waitFor = parseInt(localStorage.getItem("delay") ?? "") || 0;
  await delay(waitFor);
}
