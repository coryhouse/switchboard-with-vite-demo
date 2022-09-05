import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../demo-app-types";

const UserContext = createContext<UserContextValue | null>(null);

type UserContextValue = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  function logout() {
    setUser(null);
    localStorage.removeItem("userId");
    navigate("/");
  }

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
}
