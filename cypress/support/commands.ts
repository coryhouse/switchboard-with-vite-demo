/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";
import { getDevToolsUrl } from "../../src/utils/url-utils";
import { defaultConfig } from "../../src/demo-app/AppWithDevTools";
import { DevToolsConfig } from "../../src/demo-app/types";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
Cypress.Commands.add(
  "visitUrl",
  (config: Partial<DevToolsConfig>): Cypress.Chainable => {
    const baseUrl = new URL("http://127.0.0.1:5173/");

    const url = getDevToolsUrl(baseUrl, "devtools", {
      ...defaultConfig,
      ...config,
    });

    return cy.visit(url);
  }
);
