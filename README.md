# Switchr

A toolkit for creating custom React DevTools for your project.

## Features

This project provide 3 key tools for building your own custom DevTools:

### 1. `DevTools` component

- Configurable position
- Copy settings to URL
- Whether to open by default
- Close via outside click or the escape key
- Declarative mock APIs using [msw](https://mswjs.io/)
- Specify a global delay (to simulate a slow connection)
- Force a specific HTTP response, delay, or status code from an endpoint

### 2. `useDevToolState` Hook

Configure state that persists between reloads via localStorage. Optionally, initialize and share settings via the URL.

### 3. `useWorker` Hook

Configure mock APIs that are configurable via DevTools. Uses [msw](https://mswjs.io/) behind the scenes.

## Quick Start

Under development. Coming soon.

## Roadmap

Support more than React. Potentially rewrite in plain web components.

## Potential names

- @switchgear - reserved :)
- @switchr - reserved :)

Other org ideas, but unavailable on npm:

- @switchboard
- @velocity
- @togglr
