import App from "./App";
import DevTools from "../DevTools";
import { useWorker } from "../hooks/useWorker";
import { Endpoint, endpoints, HttpSetting } from "./types";
import Input from "../components/Input";
import Select from "../components/Select";
import { mockUsers } from "./mocks/users.mocks";
import { useDevToolsState } from "../hooks/useDevToolsState";
import { ErrorBoundary } from "react-error-boundary";
import HttpSettingForm from "./HttpSettingForm";
import ErrorFallback from "./ErrorFallback";
import Field from "../components/Field";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { requestHandlers } from "./mocks/request-handlers";
import { useUserContext } from "./contexts/UserContext";

export const httpDefaults = {
  delay: 0,
  status: 200,
  response: "",
};

export default function AppWithDevTools() {
  // Storing only userId in devToolsState to keep localStorage and URL minimal.
  // Storing the entire user would simplify the UserContext integration (since it stores the full user), but would bloat localStorage and the URL.
  const [userId, setUserId] = useDevToolsState<number | "">("userId", "");
  const [delay, setDelay, delayChanged] = useDevToolsState("delay", 0);
  const [http, setHttp] = useDevToolsState<HttpSetting[]>("http", []);

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

  const devToolsConfig = {
    userId,
    delay,
    http,
  };

  const isReady = useWorker(devToolsConfig, requestHandlers, {
    onUnhandledRequest: ({ method, url }) => {
      // Ignore these requests that need not be mocked
      if (
        url.pathname !== "/src/demo-app/CloseButton.tsx" &&
        url.pathname !== "/src/index.css" &&
        !url.pathname.startsWith("chrome-extension:")
      ) {
        throw new Error(`Unhandled ${method} request to ${url}`);
      }
    },
  });

  function simulateLogin(userId: number) {
    setUserId(userId);
    const user = mockUsers.find((u) => u.id === userId);
    if (!user) throw new Error("Can't find user: " + userId);
    localStorage.setItem("userId", JSON.stringify(userId));
    navigate("/todos");
  }

  function simulateLogout() {
    localStorage.removeItem("userId");
    setUserId("");
    navigate("/");
  }

  if (!isReady) return <p>Initializing...</p>;

  return (
    <>
      {/* Wrap app in ErrorBoundary so DevTools continue to display upon error */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* Passing a key to force the app to completely reinitialize when the userId changes. */}
        <App key={userId} />
      </ErrorBoundary>

      <DevTools
        defaultPosition="top-left"
        openByDefault
        closeViaEscapeKey
        devToolsConfig={devToolsConfig}
      >
        <>
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
              {mockUsers.map((u) => (
                <option value={u.id} key={u.id}>
                  {u.name} ({u.description.role}, {u.description.todos})
                </option>
              ))}
            </Select>
          </Field>

          <details open>
            <summary className="mt-4 font-bold">HTTP</summary>
            <Field>
              <Input
                width="full"
                changed={delayChanged}
                type="number"
                label="Global Delay (ms)"
                value={delay}
                onChange={(e) => setDelay(parseInt(e.target.value))}
              />
            </Field>

            <Field>
              <Select
                width="full"
                label="Customize Endpoint"
                // Value need not change since the selected value disappears once selected.
                value=""
                onChange={(e) => {
                  setHttp([
                    ...http,
                    {
                      endpoint: e.target.value as Endpoint,
                      delay: httpDefaults.delay,
                      status: httpDefaults.status,
                      response: httpDefaults.response,
                    },
                  ]);
                }}
              >
                <option>Select Endpoint</option>
                {endpoints
                  // Filter out endpoints that are already customized
                  .filter((e) => !http.some((h) => h.endpoint === e))
                  .map((e) => (
                    <option key={e}>{e}</option>
                  ))}
              </Select>
            </Field>

            {http.map((setting) => (
              <HttpSettingForm
                key={setting.endpoint}
                http={setting}
                setHttp={setHttp}
              />
            ))}
          </details>
        </>
      </DevTools>
    </>
  );
}
