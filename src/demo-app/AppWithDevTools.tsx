import App from "./App";
import DevTools from "../DevTools";
import { useWorker } from "../useWorker";
import { DevToolsConfig, MockUser } from "./types";
import Input from "./Input";
import { useState } from "react";
import Select from "./Select";
import { mockUsers } from "./mocks/users.mocks";

const devToolsDefaults: DevToolsConfig = {
  user: mockUsers[0],
  apiResponse: {
    addTodo: "success",
    getTodos: "many",
    markTodoCompleted: "success",
  },
  httpDelay: 0,
};

export default function AppWithDevTools() {
  const [delay, setDelay] = useState(0);
  const [user, setUser] = useState<MockUser>(devToolsDefaults.user);
  const isReady = useWorker({ ...devToolsDefaults, httpDelay: delay });

  return isReady ? (
    <>
      <App />
      <DevTools>
        <Input
          type="number"
          label="HTTP Delay"
          value={delay}
          onChange={(e) => setDelay(parseInt(e.target.value))}
        />{" "}
        ms
        <Select
          id="user"
          label="User"
          value={user.id}
          onChange={(e) => {
            const newUser = mockUsers.find(
              (u) => u.id === parseInt(e.target.value)
            ) as MockUser;
            setUser(newUser);
          }}
        >
          {mockUsers.map((u) => (
            <option value={u.id}>
              {u.name} ({u.description})
            </option>
          ))}
        </Select>
      </DevTools>
    </>
  ) : (
    <p>Initializing mock service worker</p>
  );
}
