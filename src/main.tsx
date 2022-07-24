import ReactDOM from "react-dom/client";
import App from "./demo-app/App";
import AppWithDevTools from "./demo-app/AppWithDevTools";
import "./index.css";

// This is set in the dev npm script.
const useDevTools = import.meta.env.USE_DEV_TOOLS === "Y";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  useDevTools ? <AppWithDevTools /> : <App />
);
