import App from "./App";
import DevTools from "../DevTools";

export default function AppWithDevTools() {
  return (
    <>
      <App />
      <DevTools settings={}>
        <input type="checkbox" />
      </DevTools>
    </>
  );
}
