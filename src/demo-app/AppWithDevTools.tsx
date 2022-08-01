import App from "./App";
import DevTools from "../DevTools";
import { useWorker } from "../useWorker";
import { DevToolsConfig, MockUser } from "./types";
import Input from "./Input";
import Select from "./Select";
import { mockUsers, noTodos } from "./mocks/users.mocks";
import { useDevToolsState } from "../useDevToolsState";
import { ErrorBoundary } from "react-error-boundary";
import HttpSettingForm from "./HttpSettingForm";
import ErrorFallback from "./ErrorFallback";

// These defaults apply if the URL and localStorage are empty
export const defaultConfig: DevToolsConfig = {
  user: noTodos,
  delay: 0,
  http: [],
  position: "top-left",
};

export default function AppWithDevTools() {
  const [config, setConfig] = useDevToolsState<DevToolsConfig>(
    "devtools",
    defaultConfig
  );

  const isReady = useWorker(config);

  if (!isReady) return <p>Initializing Mock Service Worker...</p>;

  return (
    <>
      {/* Wrap app in ErrorBoundary so devtools continue to display upon error */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App user={config.user} />
      </ErrorBoundary>

      <DevTools closeViaEscapeKey>
        <>
          <div>
            <Select
              id="user"
              label="User"
              value={config.user.id}
              onChange={(e) => {
                const user = mockUsers.find(
                  (u) => u.id === parseInt(e.target.value)
                ) as MockUser;
                setConfig({ ...config, user });
              }}
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
                value={config.delay}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    delay: parseInt(e.target.value),
                  })
                }
              />
            </div>

            {config.http.map(({ endpoint, delay, status }) => (
              <HttpSettingForm
                key={endpoint}
                endpoint={endpoint}
                setConfig={setConfig}
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
