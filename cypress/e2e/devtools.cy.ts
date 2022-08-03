import { devToolsPositions } from "../../src/DevTools";

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
    cy.findByLabelText("User");
    cy.findByRole("button", { name: "Close DevTools" });
  });

  describe("when default to open is false", () => {
    it("is initially closed", () => {
      cy.visitUrl({
        openByDefault: false,
      });
      cy.findByLabelText("User").should("not.exist");
      cy.findByRole("button", { name: "Open devTools" });
    });
  });
});
