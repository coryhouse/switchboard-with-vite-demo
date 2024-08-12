import App from "./App";
import Switchboard, { useSwitchboardState } from "react-switchboard";
import { requestHandlers } from "./mocks/handlers/handlers";
import ErrorFallback from "./ErrorFallback";
import { User } from "./devtools/User";
// TODO: Finish implementing this demo.
// import { SimulateTraffic } from "./devtools/SimulateTraffic";
import "react-switchboard/dist/index.css";

export default function AppWithDevTools() {
  const [userId, setUserId] = useSwitchboardState<number | null>(
    "sb-userId",
    null
  );

  return (
    <Switchboard
      ErrorFallback={ErrorFallback}
      mswSettings={{
        requestHandlers,
        startOptions: {
          quiet: false, // Don't log mocked requests to the browser console.
        },
      }}
      // Using a key to reinitialize the app when the userId changes.
      appSlot={<App key={userId} />}
    >
      <User userId={userId} setUserId={setUserId} />
      {/* <SimulateTraffic /> */}
    </Switchboard>
  );
}
