// NOTE: This file merely exists to run the demo app. It's NOT part of the published package.
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import "./index.css";
import ErrorFallback from "./ErrorFallback";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import { Toaster } from "sonner";

// Lazy load so it's not part of the prod bundle.
const AppWithDevTools = React.lazy(
  () => import(/* webpackChunkName: "devtools" */ "./AppWithDevTools")
);

// This is set in .env.local.
const useDevTools = import.meta.env.VITE_USE_DEV_TOOLS === "Y";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <UserContextProvider>
          <Toaster richColors position="top-right" />
          {useDevTools ? (
            <Suspense fallback="Loading with devtools...">
              <AppWithDevTools />
            </Suspense>
          ) : (
            <App />
          )}
        </UserContextProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
