import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: [
    "src/button.tsx",
    "src/delete-button.tsx",
    "src/field.tsx",
    "src/input.tsx",
    "src/label.tsx",
    "src/select.tsx",
  ],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  clean: true,
  ...options,
}));
