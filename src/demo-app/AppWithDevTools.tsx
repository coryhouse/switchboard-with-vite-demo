import App from "./App";
import DevTools from "../DevTools";
import { useWorker } from "../useWorker";
import { DevToolsConfig, MockUser } from "./types";
import Input from "./Input";
import Select from "./Select";
import { mockUsers } from "./mocks/users.mocks";
import useLocalStorageState from "use-local-storage-state";
import ErrorBoundary from "./ErrorBoundary";
import HttpSetting from "./HttpSetting";
import { getDevToolsSettingsFromUrlQuerystring } from "../utils/url-utils";

// Returns optional URL settings if specified. Falls back to defaults otherwise.
function getDevToolsConfigDefaults(): DevToolsConfig {
  const urlSettings = getDevToolsSettingsFromUrlQuerystring(
    window.location.search
  );

  if (urlSettings) return urlSettings;

  const defaults: DevToolsConfig = {
    user: mockUsers[0],
    autoReload: true,
    delay: 0,
    mockApis: [
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
    ],
  };

  return defaults;
}

export default function AppWithDevTools() {
  const [devToolsConfig, setDevToolsConfig] = useLocalStorageState("devtools", {
    defaultValue: getDevToolsConfigDefaults(),
  });
  const isReady = useWorker(devToolsConfig);

  if (!isReady) return <p>Initializing Mock Service Worker...</p>;

  return (
    <>
      {/* Wrap app in ErrorBoundary so devtools continue to display upon error */}
      <ErrorBoundary>
        <App user={devToolsConfig.user} />
      </ErrorBoundary>

      <DevTools
        devToolsConfig={devToolsConfig}
        setDevToolsConfig={setDevToolsConfig}
        closeViaEscapeKey
      >
        <>
          <div>
            <Select
              id="user"
              label="User"
              value={devToolsConfig.user.id}
              onChange={(e) => {
                const user = mockUsers.find(
                  (u) => u.id === parseInt(e.target.value)
                ) as MockUser;
                setDevToolsConfig({ ...devToolsConfig, user });
              }}
            >
              {mockUsers.map((u) => (
                <option value={u.id} key={u.id}>
                  {u.name} ({u.description})
                </option>
              ))}
            </Select>
          </div>

          <details>
            <summary className="mt-4 font-bold">HTTP responses</summary>
            <div className="mt-4">
              <Input
                type="number"
                label="Global Delay (ms)"
                value={devToolsConfig.delay}
                onChange={(e) =>
                  setDevToolsConfig({
                    ...devToolsConfig,
                    delay: parseInt(e.target.value),
                  })
                }
              />
            </div>

            {/** Sort array so the order doesn't change when values are set */}
            {devToolsConfig.mockApis.map(({ label, delay, status }) => (
              <HttpSetting
                key={label}
                label={label}
                setDevToolsConfig={setDevToolsConfig}
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
