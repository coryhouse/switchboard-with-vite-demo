import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../demo-app-types";
import { userIdKey } from "../constants/localStorage.constants";

const UserContext = createContext<UserContextValue | null>(null);

type UserContextValue = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export function UserContextProvider({
  children,
}: Readonly<UserContextProviderProps>) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const value = useMemo(() => {
    function logout() {
      setUser(null);
      localStorage.removeItem(userIdKey);
      navigate("/");
    }
    return { user, setUser, logout };
  }, [navigate, user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
}
