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

export async function fetchUser() {
  // Note: In a real app, an auth token would be passed to determine the response.
  const resp = await fetch("/user");
  if (!resp.ok) throw resp;
  return resp.json() as Promise<User>;
}
