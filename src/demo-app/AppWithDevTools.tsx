import App from "./App";
import DevTools from "../DevTools";
import Select from "../components/Select";
import { personas } from "./mocks/personas";
import { useDevToolsState } from "../hooks/useDevToolsState";
import Field from "../components/Field";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUserContext } from "./contexts/UserContext";
import { HttpSettings } from "../types/types";
import { generateRequestHandlers } from "./mocks/request-handlers";

export default function AppWithDevTools() {
  // Storing only userId in devToolsState to keep localStorage and URL minimal.
  // Storing the entire persona would bloat localStorage and the URL.
  const [userId, setUserId] = useDevToolsState<number | "">("userId", "");

  const { user } = useUserContext();

  // If the user passed in via context changes, then someone just logged in manually on the login form instead of using the dev tools.
  // So use the user passed in to update the userId in the dev tools state so that the devTools user dropdown matches the user in context.
  useEffect(() => setUserId(user?.id ?? ""), [user]);

  useEffect(() => {
    // When the userID changes, simulate logging the user in/out.
    // This is necessary for handling when the app is initialized via the URL.
    userId ? simulateLogin(userId) : simulateLogout();
  }, [userId]);

  const navigate = useNavigate();

  function simulateLogin(userId: number) {
    setUserId(userId);
    const user = personas.find((u) => u.id === userId);
    if (!user) throw new Error("Can't find user: " + userId);
    localStorage.setItem("userId", JSON.stringify(userId));
    navigate("/todos");
  }

  function simulateLogout() {
    localStorage.removeItem("userId");
    setUserId("");
    navigate("/");
  }

  const httpSettings: HttpSettings = {
    endpoints: [
      "login",
      "getUser",
      "getTodos",
      "addTodo",
      "deleteTodo",
      "toggleTodoCompleted",
    ],
    generateRequestHandlers,
    startOptions: {
      onUnhandledRequest: ({ method, url }) => {
        // Ignore unhandled requests for now, but can uncomment below to throw errors for unhandled requests.
        // if (
        //   url.pathname !== "/src/demo-app/CloseButton.tsx" &&
        //   url.pathname !== "/src/index.css" &&
        //   !url.pathname.startsWith("chrome-extension:")
        // ) {
        //   throw new Error(`Unhandled ${method} request to ${url}`);
        // }
      },
    },
  };

  return (
    <DevTools
      httpSettings={httpSettings}
      // Using a key to force the app to reinitialize when the userId changes.
      appSlot={<App key={userId} />}
      customSettings={{
        userId,
      }}
    >
      <Field>
        <Select
          width="full"
          id="user"
          label="Persona"
          value={userId}
          onChange={(e) => {
            const userId = parseInt(e.target.value);
            userId ? simulateLogin(userId) : simulateLogout();
          }}
        >
          <option value="">Logged out</option>
          {personas.map((u) => (
            <option value={u.id} key={u.id}>
              {u.name} ({u.description.role}, {u.description.todos})
            </option>
          ))}
        </Select>
      </Field>
    </DevTools>
  );
}
