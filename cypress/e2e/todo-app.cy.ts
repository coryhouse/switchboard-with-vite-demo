describe("Todo App", () => {
  it("shows existing todos on initial load", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.findByRole("heading", { name: "To dos" })
      // Use parent to search within the heading's <section>
      .parent()
      .within(() => {
        cy.findByText("Eat lunch");
      });
  });
});
