/// <reference types="vitest" />
/// <reference types="vite/client" />

// Official Vitest example: https://stackblitz.com/github/vitest-dev/vitest/tree/main/examples/react-testing-lib?file=src%2Futils%2Ftest-utils.tsx

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      template: "sunburst",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
  build: {
    lib: {
      formats: ["es", "cjs"],
      entry: resolve(__dirname, "src/index.ts"),
      // the proper extensions will be added
      fileName: "index",
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library
      external: ["react", "react-dom"],
    },
  },
});
