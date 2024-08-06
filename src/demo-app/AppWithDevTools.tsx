import App from "./App";
import { useDevToolsState, Switchboard } from "react-switchboard";
import { requestHandlers } from "./mocks/handlers/handlers";
import ErrorFallback from "./ErrorFallback";
import { User } from "./User";
import { SimulateTraffic } from "./SimulateTraffic";

export default function AppWithDevTools() {
  // Storing only userId in devToolsState to keep localStorage and URL minimal.
  // Storing the entire persona would bloat localStorage and the URL.
  const [userId, setUserId] = useDevToolsState<number | "">("userId", "");

  return (
    <Switchboard
      ErrorFallback={ErrorFallback}
      mswSettings={{
        requestHandlers,
        startOptions: {
          // Don't log mocked requests to the browser console.
          quiet: false,
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
    >
      <User userId={userId} setUserId={setUserId} />
      <SimulateTraffic />
    </Switchboard>
  );
}
