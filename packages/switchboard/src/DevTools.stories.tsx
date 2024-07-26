import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FallbackProps } from "react-error-boundary";

import DevTools from "./DevTools";

function ErrorFallback(props: FallbackProps) {
  return <p>Error</p>;
}

const meta = {
  component: DevTools,
} satisfies Meta<typeof DevTools>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    appSlot: <p>App here</p>,
    customSettings: {},
    defaults: {},
    httpSettings: {
      requestHandlers: [],
    },
    ErrorFallback: ErrorFallback,
  },
};
