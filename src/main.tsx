import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./demo-app/App";
import { ErrorBoundary } from "react-error-boundary";
import "./index.css";
import ErrorFallback from "./demo-app/ErrorFallback";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./demo-app/contexts/UserContext";
import { Toaster } from "sonner";

// Lazy load so it's not part of the prod bundle.
const AppWithDevTools = lazy(
  () => import(/* webpackChunkName: "devtools" */ "./demo-app/AppWithDevTools")
);

// This is set in .env.local.
const useDevTools = import.meta.env.VITE_USE_DEV_TOOLS === "Y";

createRoot(document.getElementById("root")!).render(
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
