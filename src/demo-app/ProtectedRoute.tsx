import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "./apis/user-apis";
import { useUserContext } from "./contexts/UserContext";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

// Redirect to login if user is not logged in
export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  useEffect(() => {
    // HACK: A real app would typically have a cookie/jwt as an auth token,
    // and would implement protected route above this page instead.
    async function loadUserSession() {
      const userId = localStorage.getItem("userId");
      if (!userId) return navigate("/");
      const user = await fetchUser();
      setUser(user);
    }
    loadUserSession();
  }, [navigate, setUser]);

  return <>{children}</>;
}
