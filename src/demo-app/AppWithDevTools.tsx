import App from "./App";
import DevTools, { DevToolsPosition } from "../DevTools";
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

export default function AppWithDevTools() {
  const [userId, setUserId, userIdChanged] = useDevToolsState<number | "">(
    "userId",
    ""
  );
  const [delay, setDelay, delayChanged] = useDevToolsState("delay", 0);
  const [position, setPosition] = useDevToolsState<DevToolsPosition>(
    "position",
    "top-left"
  );
  const [openByDefault, setOpenByDefault] = useDevToolsState(
    "openByDefault",
    true
  );
  const [http, setHttp] = useDevToolsState<HttpSetting[]>("http", []);

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
    openByDefault,
    position,
  };

  const isReady = useWorker(devToolsConfig);

  function simulateLogin(userId: number) {
    setUserId(userId);
    const user = mockUsers.find((u) => u.id === userId);
    if (!user) throw new Error("Can't find user: " + userId);
    localStorage.setItem("userId", JSON.stringify(userId));
    navigate("/todos");
  }

  function simulateLogout() {
    localStorage.removeItem("userId");
    navigate("/");
  }

  if (!isReady) return <p>Initializing...</p>;

  return (
    <>
      {/* Wrap app in ErrorBoundary so DevTools continue to display upon error */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* Passing a key to force the app to completely reload when the userId changes. */}
        <App key={userId} />
      </ErrorBoundary>

      <DevTools
        position={position}
        openByDefault={openByDefault}
        setPosition={(position: DevToolsPosition) => setPosition(position)}
        setOpenByDefault={(newVal) => {
          // TODO: Why isn't this getting called?
          setOpenByDefault(newVal);
        }}
        closeViaEscapeKey
        devToolsConfig={devToolsConfig}
      >
        <>
          <Field customized={userIdChanged}>
            <Select
              id="user"
              label="User"
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
                type="number"
                label="Global Delay (ms)"
                value={delay}
                onChange={(e) => setDelay(parseInt(e.target.value))}
              />
            </Field>

            <Field>
              <Select
                label="Customize Endpoint"
                // Value need not change since the selected value disappears once selected.
                value=""
                onChange={(e) => {
                  setHttp([
                    ...http,
                    {
                      endpoint: e.target.value as Endpoint,
                      delay: 0,
                      status: 200,
                      response: "default",
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
