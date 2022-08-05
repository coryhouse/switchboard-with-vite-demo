import React, { useState } from "react";
import Field from "../components/Field";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { login } from "./apis/user-apis";
import { useUserContext } from "./contexts/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const user = await login(email, password);
    if (!user) return setError("Invalid email or password.");
    setUser(user);
    // A real app would likely add an auth token to a cookie or localStorage.
    // Just storing the userId in localStorage to keep the demo simple.
    localStorage.setItem("userId", JSON.stringify(user.id));
    navigate("/todos");
  }

  return (
    <main className="grid h-screen place-content-center">
      <form onSubmit={onSubmit} className="w-72">
        <p role="alert" className="text-red-600">
          {error}
        </p>

        <Field>
          <Input
            id="email"
            width="full"
            autoComplete="off"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>

        <Field>
          <Input
            width="full"
            id="password"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>

        <Field>
          <Button type="submit" className="bg-blue-600 text-white">
            Log In
          </Button>
        </Field>
      </form>
    </main>
  );
}
