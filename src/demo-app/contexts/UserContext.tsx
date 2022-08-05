import { createContext, useContext, useState } from "react";
import { User } from "../types";

const UserContext = createContext<UserContextValue | null>(null);

type UserContextValue = {
  user: User | null;
  setUser: (user: User | null) => void;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
