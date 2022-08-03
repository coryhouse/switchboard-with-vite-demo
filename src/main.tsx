import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./demo-app/App";
// NOTE: This file merely exists to run the demo app.
// It is NOT part of the publish package.
import { ErrorBoundary } from "react-error-boundary";
import "./index.css";
import ErrorFallback from "./demo-app/ErrorFallback";
import { BrowserRouter } from "react-router-dom";

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
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        {useDevTools ? (
          <Suspense fallback="Loading with devtools...">
            <AppWithDevTools />
          </Suspense>
        ) : (
          <App />
        )}
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
