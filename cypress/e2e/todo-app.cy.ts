function findWithinSectionByHeading() {}

describe("Todo App", () => {
  it("shows existing todos on initial load, and supports adding a todo", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.findByRole("heading", { name: "To dos" })
      // Use parent to search within the heading's <section>
      .parent()
      .within(() => {
        cy.findByText("Eat lunch");
      });
    cy.findByLabelText("What do you need to do?").type("Write more tests");
    cy.findByRole("button", { name: "Add" }).click();
    // Should be cleared after submission
    cy.findByLabelText("What do you need to do?").should("be.empty");
    cy.findByText("Write more tests");
  });
});
