import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: [
    "src/DevTools.tsx",
    "src/useDevToolsState.ts",
    "src/urlUtils.ts",
  ],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "msw"],
  ...options,
}));
