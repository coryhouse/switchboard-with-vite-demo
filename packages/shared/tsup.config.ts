import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: [
    "components/button.tsx",
    "components/delete-button.tsx",
    "components/field.tsx",
    "components/input.tsx",
    "components/label.tsx",
    "components/select.tsx",
  ],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  clean: true,
  ...options,
}));
