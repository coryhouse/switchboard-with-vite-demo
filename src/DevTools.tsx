import { useState } from "react";
import Button from "./demo-app/Button";
import cx from "clsx";
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
  position = "top-left",
  children,
}: DevToolsProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section
      // TODO: Support drag and drop position.
      className={cx("devtools fixed p-4 border", {
        "bottom-0": position.includes("bottom"),
        "top-0": position.includes("top"),
        "right-0": position.includes("right"),
        "left-0": position.includes("left"),
      })}
    >
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </Button>
      {isOpen && <>{children}</>}
    </section>
  );
}
