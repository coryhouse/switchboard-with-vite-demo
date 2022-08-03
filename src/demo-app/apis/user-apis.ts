import { User } from "../types";

export async function login(email: string, password: string) {
  const resp = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!resp.ok) throw resp;
  return resp.json() as Promise<User>;
}
