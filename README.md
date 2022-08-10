# SwitchBoard 🎛

SwitchBoard is a toolkit for creating custom DevTools and mock APIs for your React app.

[See SwitchBoard in action](https://switchboard-beta.vercel.app/) 🚀

## Features

This project provides a [powerful `DevTools` component](https://github.com/coryhouse/switchboard/blob/main/src/DevTools.tsx) for creating your own custom DevTools.

- Declare mock APIs by providing [msw](https://mswjs.io/) config
- Specify a global delay (to simulate a slow connection)
- Declare custom HTTP response, delay, or status code from each endpoint
- Copy settings to URL for sharing with others
- Specify custom settings tailored to your app
- All settings are saved in localStorage (so they're available next time you open the DevTools)

## Quick Start

To run the demo app:

```
npm i
npm run dev
```

To run the demo app and Cypress tests together:

```
npm run cy
```

## Roadmap

Support other JS frameworks beyond React.
