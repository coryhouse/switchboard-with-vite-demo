import App from "./App";
import DevTools, { DevToolsPosition } from "../DevTools";
import { useWorker } from "../useWorker";
import { DevToolsConfig, Endpoint, endpoints, HttpSetting } from "./types";
import Input from "./Input";
import Select from "./Select";
import { mockUsers, noTodos } from "./mocks/users.mocks";
import { useDevToolsState } from "../useDevToolsState";
import { ErrorBoundary } from "react-error-boundary";
import HttpSettingForm from "./HttpSettingForm";
import ErrorFallback from "./ErrorFallback";
import Field from "../Field";

export default function AppWithDevTools() {
  const [userId, setUserId] = useDevToolsState("userId", noTodos.id);
  const [delay, setDelay] = useDevToolsState("delay", 0);
  const [position, setPosition] = useDevToolsState<DevToolsPosition>(
    "position",
    "top-left"
  );
  const [openByDefault, setOpenByDefault] = useDevToolsState(
    "openByDefault",
    true
  );
  const [http, setHttp] = useDevToolsState<HttpSetting[]>("http", []);

  const user = mockUsers.find((u) => u.id === userId);
  if (!user) throw new Error("User not found: " + userId);

  const isReady = useWorker({
    userId,
    delay,
    http,
    openByDefault,
    position,
  });

  if (!isReady) return <p>Initializing Mock Service Worker...</p>;

  return (
    <>
      {/* Wrap app in ErrorBoundary so DevTools continue to display upon error */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App user={user} />
      </ErrorBoundary>

      <DevTools
        position={position}
        openByDefault={openByDefault}
        setPosition={(position: DevToolsPosition) => setPosition(position)}
        setOpenByDefault={(newVal) => {
          setOpenByDefault(newVal);
        }}
        closeViaEscapeKey
      >
        <>
          <div>
            <Select
              id="user"
              label="User"
              value={userId}
              onChange={(e) => setUserId(parseInt(e.target.value))}
            >
              {mockUsers.map((u) => (
                <option value={u.id} key={u.id}>
                  {u.name} ({u.description.role}, {u.description.todos})
                </option>
              ))}
            </Select>
          </div>

          <details>
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
