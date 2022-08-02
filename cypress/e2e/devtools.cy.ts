import { getUrl } from "../utils/urlUtils";
import { devToolsPositions } from "../../src/DevTools";

describe("devtools", () => {
  devToolsPositions.forEach((position) => {
    it(`displays in the ${position} position`, () => {
      const url = getUrl({
        position,
      });
      cy.visit(url);

      if (position.includes("top")) cy.get(".top-0");
      if (position.includes("bottom")) cy.get(".bottom-0");
      if (position.includes("left")) cy.get(".left-0");
      if (position.includes("right")) cy.get(".right-0");
    });
  });

  it("defaults to open", () => {
    cy.visit(getUrl({}));
    cy.findByLabelText("User");
    cy.findByRole("button", { name: "Close DevTools" });
  });

  describe("when default to open is false", () => {
    it("is initially closed", () => {
      const url = getUrl({
        openByDefault: false,
      });
      cy.visit(url);
      cy.findByLabelText("User").should("not.exist");
      cy.findByRole("button", { name: "Open devTools" });
    });
  });
});
