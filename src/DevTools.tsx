import React, { useState, useRef } from "react";
import Button from "./components/Button";
import cx from "clsx";
import CloseButton from "./components/CloseButton";
import OpenButton from "./components/OpenButton";
import useKeypress from "react-use-keypress";
import useOutsideClick from "./hooks/useOutsideClick";
import Checkbox from "./components/Checkbox";
import Select from "./components/Select";
import Field from "./components/Field";
import { buildUrl } from "./utils/url-utils";
import { DevToolsConfig } from "./demo-app/types";
import { writeToClipboard } from "./utils/clipboard-utils";
import { useDevToolsState } from "./hooks/useDevToolsState";

export const devToolsPositions = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
] as const;

/** Union of devTools positions. */
export type DevToolsPosition = typeof devToolsPositions[number];

interface DevToolsProps {
  /** CSS to apply to the root element. */
  className?: string;

  /** When true, the devtools window closes automatically when any content outside the window is clicked. */
  closeOnOutsideClick?: boolean;

  /** When true, close the devtools window when the escape key is pressed */
  closeViaEscapeKey?: boolean;

  /** Dev tools config settings */
  devToolsConfig: DevToolsConfig;

  /** Default position */
  defaultPosition: DevToolsPosition;

  // TODO: Implement
  /** Specify a keyboard shortcut that toggles the window open/closed */
  openKeyboardShortcut?: string;

  /** Set to true to open the DevTools window by default. */
  openByDefault?: boolean;

  /** Custom content and settings to render inside the devtools */
  children: React.ReactNode;
}

/** This component is useful to display custom devtools settings for your project */
export default function DevTools({
  children,
  closeOnOutsideClick = false,
  closeViaEscapeKey = false,
  openByDefault = true,
  defaultPosition,
  className,
  devToolsConfig,
}: DevToolsProps) {
  const [isOpen, setIsOpen] = useState(openByDefault);
  const [position, setPosition] = useDevToolsState<DevToolsPosition>(
    "position",
    defaultPosition
  );
  // Using "setting" suffix for name to avoid collision with prop that specifies the default value. This stores the selected value in devTools.
  const [openByDefaultSetting, setOpenByDefaultSetting] = useDevToolsState(
    "openByDefault",
    openByDefault
  );
  const ref = useRef<HTMLDivElement>(null);

  useKeypress("Escape", () => {
    if (closeViaEscapeKey) setIsOpen(false);
  });

  useOutsideClick(ref, () => {
    if (closeOnOutsideClick) setIsOpen(false);
  });

  const toggleOpen = () => setIsOpen(!isOpen);

  async function copyDevToolsSettingsUrlToClipboard() {
    const url = buildUrl(window.location.href, devToolsConfig);
    try {
      await writeToClipboard(url);
      alert("URL copied to clipboard");
    } catch (err) {
      () => alert("Failed to copy settings URL to clipboard");
    }
  }

  return (
    <section
      ref={ref}
      // TODO: Support drag and drop position.
      className={cx(
        "fixed p-4 border shadow-xl max-h-screen overflow-auto bg-white opacity-90",
        {
          "bottom-0": position.includes("bottom"),
          "top-0": position.includes("top"),
          "right-0": position.includes("right"),
          "left-0": position.includes("left"),
        },
        className
      )}
    >
      {isOpen ? (
        <>
          <div className="flex flex-row-reverse">
            <CloseButton aria-label="Close DevTools" onClick={toggleOpen} />
          </div>
          {children}

          <details className="mt-4" open>
            <summary className="mt-4 font-bold">General</summary>

            <Field>
              <Select
                width="full"
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
                id="openByDefault"
                label="Open by default"
                onChange={() => setOpenByDefaultSetting(!openByDefaultSetting)}
                checked={openByDefaultSetting}
              />
            </Field>

            {/* TODO: Implement Auto Reload */}
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

            <div className="flex flex-row">
              <Field>
                <Button
                  className="mr-2"
                  onClick={copyDevToolsSettingsUrlToClipboard}
                >
                  Copy settings
                </Button>
              </Field>

              <Field>
                <Button
                  className="mr-2"
                  onClick={() => {
                    // TODO: Only clear devtools-related localStorage.
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Clear Settings
                </Button>
              </Field>

              <Field>
                <Button type="submit" onClick={() => window.location.reload()}>
                  Reload
                </Button>
              </Field>
            </div>
          </details>
        </>
      ) : (
        <OpenButton aria-label="Open DevTools" onClick={toggleOpen} />
      )}
    </section>
  );
}
