import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./demo-app/App";
import "./index.css";

// Lazy load so it's not part of the prod bundle.
const AppWithDevTools = React.lazy(
  () => import(/* webpackChunkName: "devtools" */ "./demo-app/AppWithDevTools")
);

// This is set in .env.local.
// If using create - react - app, it you'd say process.env.REACT_APP_USE_DEV_TOOLS instead.
const useDevTools = import.meta.env.VITE_USE_DEV_TOOLS === "Y";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  useDevTools ? (
    <Suspense fallback="Loading with devtools...">
      <AppWithDevTools />
    </Suspense>
  ) : (
    <App />
  )
);
