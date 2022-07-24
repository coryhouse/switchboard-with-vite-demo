import { useState } from "react";
import "./DevTools.css";

interface DevToolsSetting {
  /** Setting label */
  label: string;

  /** Setting default value */
  defaultValue: string | Array<string>;

  /** Input type */
  inputType: "text" | "radio" | "checkbox" | "select";
}

interface DevToolsProps {
  /** Specify where this component should be positioned on the page */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";

  /** Array of devtools settings */
  // settings: Array<DevToolsSetting>;

  /** Content and settings to render inside the devtools */
  children: React.ReactNode;
}

/** This component is useful to display custom devtools settings for your project */
export default function DevTools({
  position = "bottom-right",
  children,
}: DevToolsProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="devtools">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen ? (
        <>
          <h1>Dev Tools</h1>
          {children}
        </>
      ) : null}
    </section>
  );
}
