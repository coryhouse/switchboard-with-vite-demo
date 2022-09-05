import App from "./App";
import DevTools from "../DevTools";
import Select from "../components/Select";
import { personas } from "./mocks/personas";
import { useDevToolsState } from "../hooks/useDevToolsState";
import Field from "../components/Field";
import { requestHandlers } from "./mocks/request-handlers";
import useUserSync from "./useUserSync";

export default function AppWithDevTools() {
  // Storing only userId in devToolsState to keep localStorage and URL minimal.
  // Storing the entire persona would bloat localStorage and the URL.
  const [userId, setUserId] = useDevToolsState<number | "">("userId", "");
  useUserSync(userId, setUserId);

  return (
    <DevTools
      httpSettings={{
        requestHandlers,
        startOptions: {
          // Don't log mocked requests to the browser console.
          quiet: true,

          // Ignore unhandled requests. Uncomment below to throw errors for unhandled requests instead.
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onUnhandledRequest: ({ method, url }) => {
            // if (
            //   url.pathname !== "/src/index.css" &&
            //   !url.pathname.startsWith("chrome-extension:")
            // ) {
            //   throw new Error(`Unhandled ${method} request to ${url}`);
            // }
          },
        },
      }}
      // Using a key to force the app to reinitialize when the userId changes.
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
          {personas.map((u) => (
            <option value={u.id} key={u.id}>
              {u.name} ({u.description.role}, {u.description.todos})
            </option>
          ))}
        </Select>
      </Field>
    </DevTools>
  );
}
