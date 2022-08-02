import React, { useState, useRef, ChangeEvent } from "react";
import Button from "./demo-app/Button";
import cx from "clsx";
import CloseButton from "./CloseButton";
import OpenButton from "./OpenButton";
import useKeypress from "react-use-keypress";
import useOutsideClick from "./useOutsideClick";
import Checkbox from "./demo-app/Checkbox";
import Select from "./demo-app/Select";
import Field from "./Field";

export const devToolsPositions = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
] as const;

/** Union of devTools positions. */
export type DevToolsPosition = typeof devToolsPositions[number];

// interface DevToolsSetting {
//   /** Setting label */
//   label: string;

//   /** Setting default value */
//   defaultValue: string | Array<string>;

//   /** Input type */
//   inputType: "text" | "radio" | "checkbox" | "select";
// }

interface DevToolsProps {
  /** When true, the devtools window closes automatically when any content outside the window is clicked. */
  closeOnOutsideClick?: boolean;

  /** When true, close the devtools window when the escape key is pressed */
  closeViaEscapeKey?: boolean;

  /** Update position */
  setPosition: (newPosition: DevToolsPosition) => void;

  /** DevTool window position */
  position: DevToolsPosition;

  /** Set to true to open the DevTools window by default */
  openByDefault: boolean;

  /** Toggle the openByDefault setting */
  setOpenByDefault: (openByDefault: boolean) => void;

  /** Array of devtools settings */
  // settings: Array<DevToolsSetting>;

  /** Content and settings to render inside the devtools */
  children: React.ReactNode;
}

/** This component is useful to display custom devtools settings for your project */
export default function DevTools({
  children,
  closeOnOutsideClick = false,
  closeViaEscapeKey = false,
  setPosition,
  position,
  openByDefault,
  setOpenByDefault,
}: DevToolsProps) {
  const [isOpen, setIsOpen] = useState(openByDefault);
  const ref = useRef<HTMLDivElement>(null);

  useKeypress("Escape", () => {
    if (closeViaEscapeKey) setIsOpen(false);
  });

  useOutsideClick(ref, () => {
    if (closeOnOutsideClick) setIsOpen(false);
  });

  const toggleOpen = () => setIsOpen(!isOpen);

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
          <div className="flex flex-row-reverse">
            <CloseButton aria-label="Close DevTools" onClick={toggleOpen} />
          </div>
          {children}

          <details className="mt-4">
            <summary className="mt-4 font-bold">Meta</summary>

            <Field>
              <Select
                label="Position"
                value={position}
                onChange={(e) =>
                  setPosition(e.target.value as DevToolsPosition)
                }
              >
                <option value="top-left">Top left</option>
                <option value="top-right">Top Right</option>
                <option value="bottom-left">Bottom left</option>
                <option value="bottom-right">Bottom right</option>
              </Select>
            </Field>

            <Field>
              <Checkbox
                label="Open by default"
                onChange={() => setOpenByDefault(!openByDefault)}
                checked={openByDefault}
              />
            </Field>

            {/* <Field>
              <Checkbox
                label="Auto Reload"
                onChange={(e) => {
                  setDevToolsConfig((config) => {
                    return { ...config, autoReload: e.target.checked };
                  });
                }}
                checked={devToolsConfig.autoReload}
              />
            </Field> */}

            <Field>
              <Button type="submit" onClick={() => window.location.reload()}>
                Reload
              </Button>
            </Field>
          </details>
        </>
      ) : (
        <OpenButton aria-label="Open devTools" onClick={toggleOpen} />
      )}
    </section>
  );
}
