import { devToolsPositions } from "../../../react-switchboard/src/types/types";

describe("devtools", () => {
  describe("position", () => {
    devToolsPositions.forEach((position) => {
      it(`displays in the ${position}`, () => {
        cy.visitUrl({
          position,
        });

        if (position.includes("top")) cy.get(".top-0");
        if (position.includes("bottom")) cy.get(".bottom-0");
        if (position.includes("left")) cy.get(".left-0");
        if (position.includes("right")) cy.get(".right-0");
      });
    });
  });

  describe("defaults", () => {
    it("uses fallback defaults when no optional default overrides are provided", () => {
      cy.visitUrl({});
      cy.findByLabelText("Persona");
      // Should default to open
      cy.findByRole("button", { name: "Close DevTools" });

      // Should display in top left by default
      cy.get(".top-0");
      cy.get(".left-0");

      // Should have close via outside click off by default
      cy.findByLabelText("Close via outside click").should("not.be.checked");

      // Should have close via escape on by default
      cy.findByLabelText("Close via escape key").should("be.checked");

      // Should have 0 Global delay by default
      cy.findByLabelText("Global Delay").should("have.value", "0");
    });
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
    it.only("should copy the settings to the clipboard", () => {
      // Overriding ALL settings to assure they all show up in the generated URL, and are reflected upon load.
      cy.visitUrl({
        openByDefault: false,
        delay: 100,
        userId: 2,
        position: "top-right",
        customResponses: [
          {
            delay: 1,
            handler: "DELETE /todo/:id",
            status: 201,
            response: "test",
          },
        ],
      });

      // Must open via click since the URL above specifies DevTools should be closed by default.
      cy.findByRole("button", { name: "Open DevTools" }).click();

      cy.findByRole("button", { name: "Copy Settings" }).click();

      // Should change the button's label upon click
      cy.findByRole("button", { name: "Copied ✅" }).then(() => {
        cy.window().then((win) => {
          win.navigator.clipboard.readText().then((text) => {
            const expectedUrl =
              "http://127.0.0.1:5173/todos?position=%22top-right%22&openByDefault=false&delay=100&customResponses=%5B%7B%22delay%22%3A1%2C%22handler%22%3A%22DELETE+%2Ftodo%2F%3Aid%22%2C%22status%22%3A201%2C%22response%22%3A%22test%22%7D%5D&userId=2";
            expect(text).to.eq(expectedUrl);
          });
        });
      });
    });
  });
});
