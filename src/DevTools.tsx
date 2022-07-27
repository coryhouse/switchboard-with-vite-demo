import { useState } from "react";
import Button from "./demo-app/Button";
import cx from "clsx";
import "./DevTools.css";
import CloseButton from "./demo-app/CloseButton";
import OpenButton from "./demo-app/OpenButton";

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

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <section
      // TODO: Support drag and drop position.
      className={cx("devtools fixed p-4 border shadow-lg", {
        "bottom-0": position.includes("bottom"),
        "top-0": position.includes("top"),
        "right-0": position.includes("right"),
        "left-0": position.includes("left"),
      })}
    >
      {isOpen ? (
        <>
          <CloseButton onClick={toggleOpen} />
          {children}
        </>
      ) : (
        <OpenButton onClick={toggleOpen} />
      )}
    </section>
  );
}
