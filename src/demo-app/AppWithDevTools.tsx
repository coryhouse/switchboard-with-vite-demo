import App from "./App";
import DevTools from "../DevTools";
import { useWorker } from "../useWorker";
import { DevToolsConfig } from "./types";
import Input from "./Input";
import { useState } from "react";

const devToolsConfigDefaults: DevToolsConfig = {
  apiResponse: {
    addTodo: "success",
    getTodos: "many",
    markTodoCompleted: "success",
  },
  httpDelay: 0,
  user: {
    id: 1,
    name: "Cory",
    todos: [
      {
        id: 1,
        todo: "Eat chili",
        completed: false,
      },
    ],
  },
};

export default function AppWithDevTools() {
  const [delay, setDelay] = useState(0);
  const isReady = useWorker({ ...devToolsConfigDefaults, httpDelay: delay });

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
      </DevTools>
    </>
  ) : (
    <p>Initializing mock service worker</p>
  );
}
