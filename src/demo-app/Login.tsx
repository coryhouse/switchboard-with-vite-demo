import React, { useEffect, useState } from "react";
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
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(
    function redirectIfAlreadyLoggedIn() {
      if (user) navigate("/todos");
    },
    [navigate, user]
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const user = await login(email, password);
    if (!user) return setError("Invalid email or password.");
    // A real app would likely store an auth token in a cookie at this point. Just storing the userId in memory to keep the demo simple.
    setUser(user);
  }

  return (
    <main className="grid h-screen place-content-center">
      <form onSubmit={onSubmit} className="w-72">
        <h1 className="text-3xl">Log In</h1>
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
          <Button type="submit" className="text-white bg-blue-600">
            Log In
          </Button>
        </Field>
      </form>
    </main>
  );
}
