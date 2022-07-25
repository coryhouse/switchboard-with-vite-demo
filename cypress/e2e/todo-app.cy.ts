// Use parent to search within the heading's <section>
function isInSection(heading: string, text: string) {
  cy.findByRole("heading", { name: heading })
    .parent()
    .within(() => {
      cy.findByText(text);
    });
}

describe("Todo App", () => {
  it("shows existing todos on initial load, supports adding a todo, and marking as complete", () => {
    cy.visit("http://127.0.0.1:5173/");

    // First, assure existing todos display
    isInSection("Stuff to do", "Eat lunch");

    // Now, add a new todo
    cy.findByLabelText("What do you need to do?").type("Write more tests");
    cy.findByRole("button", { name: "Add" }).click();

    // New todo should display
    isInSection("Stuff to do", "Write more tests");

    // Input should be cleared after submission
    cy.findByLabelText("What do you need to do?").should("be.empty");

    //
  });
});
