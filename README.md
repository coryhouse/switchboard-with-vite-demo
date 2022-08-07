# SwitchBoard 🎛

SwitchBoard is a toolkit for creating custom DevTools and mock APIs for your React app.

Demo: [See SwitchBoard in action](https://switchboard-beta.vercel.app/)

## Features

This project provides a single, powerful `DevTools` component for creating your own custom DevTools:

- Configurable position
- Copy settings to URL
- Whether to open by default
- Close via outside click or the escape key
- Declarative mock APIs using [msw](https://mswjs.io/)
- Specify a global delay (to simulate a slow connection)
- Force a specific HTTP response, delay, or status code from an endpoint

## Quick Start

To run the demo app:

```
npm i
npm run cy
```

To run the demo app and Cypress tests together:

```
npm run cy
```

## Roadmap

Support other JS frameworks beyond React.
