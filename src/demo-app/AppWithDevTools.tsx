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

function getDevToolsConfigDefaults() {
  const defaults: DevToolsConfig = {
    user: mockUsers[0],
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
        label: "markTodoCompleted",
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

  const sortedMockApis = devToolsConfig.mockApis.sort(
    (a, b) => a.label.length - b.label.length
  );

  return (
    <>
      {/* Wrap app in ErrorBoundary so devtools continue to display upon error */}
      <ErrorBoundary>
        <App user={devToolsConfig.user} />
      </ErrorBoundary>
      <DevTools devToolsConfig={devToolsConfig} closeViaEscapeKey>
        <>
          <div className="mt-4">
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

          <h2 className="mt-4 font-bold">HTTP responses</h2>
          {/** Sort array so the order doesn't change when values are set */}
          {sortedMockApis.map(({ label, delay, status }) => (
            <HttpSetting
              key={label}
              label={label}
              setDevToolsConfig={setDevToolsConfig}
              delay={delay}
              status={status}
            />
          ))}
        </>
      </DevTools>
    </>
  );
}
