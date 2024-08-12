import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "./apis/user-apis";
import { useUserContext } from "./contexts/UserContext";
import { userIdKey } from "./constants/localStorage.constants";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

// Redirect to login if user is not logged in
export default function ProtectedRoute({
  children,
}: Readonly<ProtectedRouteProps>) {
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  useEffect(() => {
    async function loadUserSession() {
      // HACK: A real app would typically have a cookie/jwt as an auth token
      const userId = localStorage.getItem(userIdKey);
      if (!userId) return navigate("/");
      const user = await fetchUser();
      setUser(user);
    }
    loadUserSession();
  }, [navigate, setUser]);

  return <>{children}</>;
}
