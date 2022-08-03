import React, { useState } from "react";
import Field from "../components/Field";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { login } from "./apis/user-apis";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const user = await login(email, password);
    if (!user) return setError("Invalid email or password.");
    localStorage.setItem("userId", JSON.stringify(user.id));
    navigate("/todos");
  }

  return (
    <main className="grid h-screen place-content-center">
      <form onSubmit={onSubmit}>
        <p role="alert" className="text-red-600">
          {error}
        </p>

        <Field>
          <Input
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>

        <Field>
          <Input
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>

        <Field>
          <Button type="submit" className="bg-blue-600 text-white">
            Login
          </Button>
        </Field>
      </form>
    </main>
  );
}
