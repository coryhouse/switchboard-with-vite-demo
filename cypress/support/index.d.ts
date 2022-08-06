/// <reference types="cypress" />
import { DevToolsConfig } from "../../src/demo-app/demo-app-types";

declare global {
  namespace Cypress {
    interface Chainable {
      visitUrl(config: Partial<DevToolsConfig>): Chainable<Element>;
    }
  }
}
