import React, { useState, useRef } from "react";
import Button from "./demo-app/Button";
import cx from "clsx";
import CloseButton from "./CloseButton";
import OpenButton from "./OpenButton";
import useKeypress from "react-use-keypress";
import useOutsideClick from "./useOutsideClick";
import LinkButton from "./LinkButton";
import { writeToClipboard } from "./utils/clipboard-utils";
import { buildUrlWithDevtoolsSettings } from "./utils/url-utils";

interface DevToolsSetting {
  /** Setting label */
  label: string;

  /** Setting default value */
  defaultValue: string | Array<string>;

  /** Input type */
  inputType: "text" | "radio" | "checkbox" | "select";
}

interface DevToolsProps {
  /** When true, the devtools window closes automatically when any content outside the window is clicked. */
  closeOnOutsideClick?: boolean;

  /** When true, close the devtools window when the escape key is pressed */
  closeViaEscapeKey?: boolean;

  /** Dev tools config settings */
  devToolsConfig: any;

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
  closeOnOutsideClick = false,
  closeViaEscapeKey = false,
  devToolsConfig,
}: DevToolsProps) {
  const [isOpen, setIsOpen] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useKeypress("Escape", () => {
    if (closeViaEscapeKey) setIsOpen(false);
  });

  useOutsideClick(ref, () => {
    if (closeOnOutsideClick) setIsOpen(false);
  });

  const toggleOpen = () => setIsOpen(!isOpen);

  async function copyDevToolsSettingsUrlToClipboard() {
    const url = buildUrlWithDevtoolsSettings(window.location, devToolsConfig);
    try {
      await writeToClipboard(url);
      alert("Settings URL copied to clipboard");
    } catch (err) {
      () => alert("Failed to copy settings URL to clipboard");
    }
  }

  return (
    <section
      ref={ref}
      // TODO: Support drag and drop position.
      className={cx("fixed p-4 border shadow-lg max-h-screen overflow-auto", {
        "bottom-0": position.includes("bottom"),
        "top-0": position.includes("top"),
        "right-0": position.includes("right"),
        "left-0": position.includes("left"),
      })}
    >
      {isOpen ? (
        <>
          <CloseButton
            aria-label="Close devtools"
            onClick={toggleOpen}
            className="absolute top-2 right-2"
          />
          <LinkButton onClick={copyDevToolsSettingsUrlToClipboard} />
          {children}
        </>
      ) : (
        <OpenButton onClick={toggleOpen} />
      )}
    </section>
  );
}
