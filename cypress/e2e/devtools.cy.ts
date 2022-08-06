import { devToolsPositions } from "../../src/types/types";

describe("devtools", () => {
  devToolsPositions.forEach((position) => {
    it(`displays in the ${position} position`, () => {
      cy.visitUrl({
        position,
      });

      if (position.includes("top")) cy.get(".top-0");
      if (position.includes("bottom")) cy.get(".bottom-0");
      if (position.includes("left")) cy.get(".left-0");
      if (position.includes("right")) cy.get(".right-0");
    });
  });

  it("defaults to open", () => {
    cy.visitUrl({});
    cy.findByLabelText("Persona");
    cy.findByRole("button", { name: "Close DevTools" });
  });

  describe("when defaultToOpen is false", () => {
    it("is initially closed", () => {
      cy.visitUrl({
        openByDefault: false,
      });
      cy.findByLabelText("User").should("not.exist");
      cy.findByRole("button", { name: "Open DevTools" });
    });
  });

  describe('when the "Copy Settings" button is clicked', () => {
    // Note: We don't need to test that the URL actually works here since all other tests do that via the visitUrl command.
    it("should copy the settings to the clipboard", () => {
      cy.visitUrl({
        openByDefault: false,
        delay: 100,
        userId: 2,
      });
      cy.findByRole("button", { name: "Copy Settings" }).click();
      // TODO: Finish this test.
      const expectedUrl = "";
      cy.window().then((win) => {
        win.navigator.clipboard.readText().then((text) => {
          expect(text).to.eq(expectedUrl);
        });
      });
    });
  });
});
