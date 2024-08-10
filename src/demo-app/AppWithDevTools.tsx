import App from "./App";
import Switchboard, { useSwitchboardState } from "react-switchboard";
import { requestHandlers } from "./mocks/handlers/handlers";
import ErrorFallback from "./ErrorFallback";
import { User } from "./User";
import { SimulateTraffic } from "./SimulateTraffic";

export default function AppWithDevTools() {
  // Storing only userId in devToolsState to keep localStorage and URL minimal.
  // Storing the entire persona would bloat localStorage and the URL.
  const [userId, setUserId] = useSwitchboardState<number | null>(
    "userId",
    null
  );

  return (
    <Switchboard
      ErrorFallback={ErrorFallback}
      mswSettings={{
        requestHandlers,
        startOptions: {
          // Don't log mocked requests to the browser console.
          quiet: false,
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
