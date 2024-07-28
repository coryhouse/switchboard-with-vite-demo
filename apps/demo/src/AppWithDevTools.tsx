import App from "./App.js";
import DevTools from "switchboard/DevTools";
import Select from "@repo/shared/select";
import { mockPersonas } from "./mocks/data/personas.mocks.js";
import { useDevToolsState } from "switchboard/useDevToolsState";
import Field from "@repo/shared/field";
import { requestHandlers } from "./mocks/handlers/handlers.js";
import useUserSync from "./useUserSync.js";
import Button from "@repo/shared/button";
import { addTodo, deleteTodo } from "./apis/todo-apis.js";
import Input from "@repo/shared/input";
import { useState } from "react";

type SimulateAction = "add" | "edit" | "delete";

export default function AppWithDevTools() {
  // Storing only userId in devToolsState to keep localStorage and URL minimal.
  // Storing the entire persona would bloat localStorage and the URL.
  const [userId, setUserId] = useDevToolsState<number | "">("userId", "");
  useUserSync(userId, setUserId);

  const [simulateAction, setSimulateAction] = useState<SimulateAction>("add");
  const [simulateAdd, setSimulateAdd] = useState("");
  const [simulateDelete, setSimulateDelete] = useState("");

  return (
    <DevTools
      ErrorFallback={({ error }) => (
        <div className="p-4 bg-red-100 text-red-800 rounded-md">
          {error.message}
        </div>
      )}
      httpSettings={{
        requestHandlers,
        startOptions: {
          // Don't log mocked requests to the browser console.
          quiet: true,

          // Ignore unhandled requests. Uncomment below to throw errors for unhandled requests instead.
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          // onUnhandledRequest: ({ method, url }) => {
          // if (
          //   url.pathname !== "/src/index.css" &&
          //   !url.pathname.startsWith("chrome-extension:")
          // ) {
          //   throw new Error(`Unhandled ${method} request to ${url}`);
          // }
          // },
        },
      }}
      // Using a key to reinitialize the app when the userId changes.
      appSlot={<App key={userId} />}
      openKeyboardShortcut={{ key: "ArrowDown", alt: true }}
      customSettings={{
        userId,
      }}
    >
      <Field>
        <Select
          width="full"
          id="user"
          label="Persona"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value ? parseInt(e.target.value) : "");
          }}
        >
          <option value="">Logged out</option>
          {mockPersonas.map(({ id, description, response }) => (
            <option value={id} key={id}>
              {response.name} ({description.role}, {description.todos})
            </option>
          ))}
        </Select>
      </Field>

      <details className="mt-4" open>
        <summary className="font-bold">Simulate Traffic</summary>
        <Field>
          <Select
            label="Action"
            value={simulateAction}
            onChange={(e) => {
              setSimulateAction(e.target.value as SimulateAction);
            }}
          >
            <option value="add">Add</option>
            <option value="delete">Delete</option>
            <option value="edit">Edit</option>
          </Select>
        </Field>

        {simulateAction === "add" && (
          <Field>
            <Input
              label="Todo"
              value={simulateAdd}
              id="simulate-add"
              onChange={(e) => setSimulateAdd(e.target.value)}
            />
            <Button
              onClick={() => {
                addTodo(simulateAdd);
              }}
            >
              Add
            </Button>
          </Field>
        )}

        {simulateAction === "delete" && (
          <Field>
            <Input
              label="Todo Id"
              value={simulateDelete}
              type="number"
              id="simulate-delete"
              onChange={(e) => setSimulateDelete(e.target.value)}
            />
            <Button
              onClick={() => {
                if (!simulateDelete) return;
                deleteTodo(parseInt(simulateDelete));
                setSimulateDelete("");
              }}
            >
              Delete
            </Button>
          </Field>
        )}
      </details>
    </DevTools>
  );
}
