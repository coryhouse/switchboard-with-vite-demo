# SwitchBoard 🎛 ⚛️

SwitchBoard is toolkit for creating custom DevTools and mock APIs for your React app.

Switchr is toolkit for creating custom DevTools for your React project.

## Features

This project provides 3 key building blocks for creating your own custom DevTools:

### 1. `DevTools` component

- Configurable position
- Copy settings to URL
- Whether to open by default
- Close via outside click or the escape key
- Declarative mock APIs using [msw](https://mswjs.io/)
- Specify a global delay (to simulate a slow connection)
- Force a specific HTTP response, delay, or status code from an endpoint

### 2. `useDevToolState` Hook

Configure state that persists between reloads via localStorage. Read optional URL settings to initialize state.

### 3. `useWorker` Hook

Configure mock APIs that are configurable via DevTools. Uses [msw](https://mswjs.io/) behind the scenes.

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

## Potential names

- @switchgear - reserved :)
- @switchr - reserved :)

Other org ideas, but unavailable on npm:

- @switchboard
- @velocity
- @togglr
