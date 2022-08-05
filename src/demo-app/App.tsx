import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import Login from "./Login";
import Todos from "./Todos";
import { User } from "./types";

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContextProvider user={user} setUser={setUser}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </UserContextProvider>
  );
}
