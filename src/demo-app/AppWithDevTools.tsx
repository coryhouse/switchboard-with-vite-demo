import App from "./App";
import DevTools from "../DevTools";
import { useWorker } from "../useWorker";
import { DevToolsConfig, MockUser } from "./types";
import Input from "./Input";
import Select from "./Select";
import { mockUsers } from "./mocks/users.mocks";
import useLocalStorageState from "use-local-storage-state";

const devToolsConfigDefaults: DevToolsConfig = {
  user: mockUsers[1],
  apiResponse: {
    addTodo: {
      delay: 0,
      status: 200,
    },
    getTodos: {
      delay: 0,
      status: 200,
    },
    markTodoCompleted: {
      delay: 0,
      status: 200,
    },
  },
  delay: 0,
};

export default function AppWithDevTools() {
  const [devToolsConfig, setDevToolsConfig] = useLocalStorageState("devtools", {
    defaultValue: devToolsConfigDefaults,
  });
  const isReady = useWorker(devToolsConfig);

  if (!isReady) return <p>Initializing Mock Service Worker...</p>;

  return (
    <>
      <App user={devToolsConfig.user} />
      <DevTools>
        <div className="mt-4">
          <Select
            id="user"
            label="User"
            value={devToolsConfig.user.id}
            onChange={(e) => {
              const newUser = mockUsers.find(
                (u) => u.id === parseInt(e.target.value)
              ) as MockUser;
              setDevToolsConfig({ ...devToolsConfig, user: newUser });
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

        <h2 className="mt-4">HTTP responses</h2>

        <fieldset className="mt-4 border p-4">
          <legend>getTodos</legend>
          <div>
            <Input
              type="number"
              label="Delay (ms)"
              value={devToolsConfig.apiResponse.getTodos.delay}
              onChange={(e) => {
                setDevToolsConfig({
                  ...devToolsConfig,
                  apiResponse: {
                    ...devToolsConfig.apiResponse,
                    getTodos: {
                      ...devToolsConfig.apiResponse.getTodos,
                      delay: parseInt(e.target.value),
                    },
                  },
                });
              }}
            />

            <Input
              type="number"
              label="Status Code"
              value={devToolsConfig.apiResponse.getTodos.status}
              onChange={(e) => {
                setDevToolsConfig({
                  ...devToolsConfig,
                  apiResponse: {
                    ...devToolsConfig.apiResponse,
                    getTodos: {
                      ...devToolsConfig.apiResponse.getTodos,
                      status: parseInt(e.target.value),
                    },
                  },
                });
              }}
            />
          </div>
        </fieldset>
      </DevTools>
    </>
  );
}
