const config = {
  entry: ["src/main.tsx", "src/setupTests.ts"],
  ignore: [
    // Deliberately telling knip to ignore all test files. This way, if a file or func is only used by a test, knip will report it as unused.
    "src/**/*.test.*",
    "docs/**",
    "package.json",
  ],
  ignoreDependencies: [],
  ignoreBinaries: [],
};

export default config;
