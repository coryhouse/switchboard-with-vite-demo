import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { mockPersonas } from "../mocks/data/personas.mocks";
import { userIdKey } from "../constants/localStorage.constants";

/**
 * This hook keeps the app user in sync with the DevTool user, since either
 * aspect of the app can push a change that the other half must react to.
 * */
export default function useUserSync(
  userId: number | null,
  setUserId: (val: number | null) => void
) {
  const { user } = useUserContext();
  const [previousUser, setPreviousUser] = useState(user);
  const navigate = useNavigate();

  // If the user passed in via context changes, then someone just logged in
  // manually on the login form instead of using the DevTools. So use the user
  // passed in to update the userId in the DevTools state so that the DevTools
  // user dropdown matches the user in UserContext.
  //
  // This check happens as part of the render because we don't want the
  // effect below to run while the states are out of sync with each other.
  // Setting state inline will trigger a fresh render without running stale
  // effects.
  if (user !== previousUser) {
    setUserId(user?.id ?? null);
    setPreviousUser(user);
  }

  // When the userId changes, simulate logging the user in/out.
  // This also handles when the app is initialized via the URL.
  useEffect(() => {
    function simulateLogin(userId: number) {
      setUserId(userId);
      const user = mockPersonas.find(({ id }) => id === userId);
      if (!user) throw new Error("Can't find user: " + userId);
      localStorage.setItem(userIdKey, JSON.stringify(userId));
      navigate("/todos");
    }

    function simulateLogout() {
      localStorage.removeItem(userIdKey);
      setUserId(null);
      navigate("/");
    }

    userId ? simulateLogin(userId) : simulateLogout();
  }, [userId, setUserId, navigate]);
}
