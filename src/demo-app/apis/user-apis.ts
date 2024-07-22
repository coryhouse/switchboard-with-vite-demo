import { User } from "../demo-app-types";
import ky from "ky";

export async function login(email: string, password: string): Promise<User> {
  return ky.post("/login", { json: { email, password } }).json<User>();
}

export async function fetchUser(): Promise<User> {
  // Note: In a real app, an auth token would be passed to determine the response.
  return ky("/user").json<User>();
}
