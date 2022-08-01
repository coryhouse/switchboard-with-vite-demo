import App from "./App";
import DevTools from "../DevTools";
import { useWorker } from "../useWorker";
import { DevToolsConfig, HttpSetting } from "./types";
import Input from "./Input";
import Select from "./Select";
import { mockUsers } from "./mocks/users.mocks";
import { useDevToolsState } from "../useDevToolsState";
import { ErrorBoundary } from "react-error-boundary";
import HttpSettingForm from "./HttpSettingForm";
import ErrorFallback from "./ErrorFallback";

export default function AppWithDevTools() {
  const [userId, setUserId] = useDevToolsState("userId", mockUsers[0].id);
  const [delay, setDelay] = useDevToolsState("delay", 0);
  const [httpSettings, setHttpSettings] = useDevToolsState<HttpSetting[]>(
    "httpSettings",
    [
      {
        label: "addTodo",
        delay: 0,
        status: 200,
      },
      {
        label: "getTodos",
        delay: 0,
        status: 200,
      },
      {
        label: "toggleTodoCompleted",
        delay: 0,
        status: 200,
      },
    ]
  );

  const user = mockUsers.find((u) => u.id === userId);
  if (!user) throw new Error("Can't find userId: " + userId);

  const devToolsConfig: DevToolsConfig = {
    user,
    delay,
    httpSettings,
  };

  const isReady = useWorker(devToolsConfig);

  if (!isReady) return <p>Initializing Mock Service Worker...</p>;

  return (
    <>
      {/* Wrap app in ErrorBoundary so devtools continue to display upon error */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App user={user} />
      </ErrorBoundary>

      <DevTools devToolsConfig={devToolsConfig} closeViaEscapeKey>
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
            <div className="mt-4">
              <Input
                type="number"
                label="Global Delay (ms)"
                value={delay}
                onChange={(e) => setDelay(parseInt(e.target.value))}
              />
            </div>

            {httpSettings.map(({ label, delay, status }) => (
              <HttpSettingForm
                key={label}
                label={label}
                setHttpSettings={setHttpSettings}
                delay={delay}
                status={status}
              />
            ))}
          </details>
        </>
      </DevTools>
    </>
  );
}
