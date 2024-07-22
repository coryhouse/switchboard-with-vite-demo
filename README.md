# SwitchBoard 🎛

Toolkit for creating custom DevTools and mock APIs for your React app.

[See SwitchBoard in action](https://switchboard-beta.vercel.app/) 🚀

## Features

This project provides a [powerful `DevTools` component](https://github.com/coryhouse/switchboard/blob/main/src/DevTools.tsx) for creating your own custom DevTools.

- Declare mock APIs by providing [msw](https://mswjs.io/) config
- Specify a global delay (to simulate a slow connection)
- Declare custom HTTP response, delay, or status code from each endpoint
- Copy settings to URL for sharing with others
- Specify custom settings tailored to your app
- Settings are saved in localStorage (so they're available next time you open the DevTools, and persist across tabs)

## Quick Start

To run the demo app:

```
npm install
npm run dev
```

To run the demo app and Playwright tests together:

```
npx playwright test
```

## Roadmap

- Show integration with react-query
- Support page-specific settings
- Support other JS frameworks
