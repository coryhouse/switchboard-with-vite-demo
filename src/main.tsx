import React from "react";
import ReactDOM from "react-dom/client";
import DevTools from "./DevTools";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <p className="text-3xl">
      This file merely exists to display the components. It's not bundled in the
      library.
    </p>
    <DevTools>
      <input type="checkbox" />
    </DevTools>
  </React.StrictMode>
);
