import App from "./App";
import DevTools from "../DevTools";
import { useWorker } from "../useWorker";
import { DevToolsConfig } from "./types";

const devToolsConfig: DevToolsConfig = {
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
  const isReady = useWorker(devToolsConfig);

  return isReady ? (
    <>
      <App />
      <DevTools>
        <input type="checkbox" />
      </DevTools>
    </>
  ) : (
    <p>Initializing mock service worker</p>
  );
}
