import React from "react";
import ReactDOM from "react-dom/client";
import DevTools from "./DevTools";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <p>
      This file merely exists to display the components. This file isn't bundled
      in the library.
    </p>
    <DevTools>
      <input type="checkbox" />
    </DevTools>
  </React.StrictMode>
);
