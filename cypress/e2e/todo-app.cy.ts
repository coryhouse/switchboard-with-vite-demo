import * as personas from "../../src/demo-app/mocks/personas";

describe("log in", () => {
  it("logs the user in successfully via the form", () => {
    cy.visitUrl({});
    cy.findByLabelText("Email").type("cory@reactjsconsulting.com");
    cy.findByLabelText("Password").type("123");
    cy.findByRole("button", { name: "Log In" }).click();
    cy.findByRole("heading", { name: /Hi Cory/ });
  });
});

describe("new user", () => {
  it("shows a welcome message, supports adding a todo, and hides the delete feature", () => {
    cy.visitUrl({
      userId: personas.noTodos.id,
      delay: 50,
    });
    cy.findByText("Welcome! Start entering your todos below.");

    addTodo("Write more tests");
    toggleComplete("Write more tests");

    // The delete button shouldn't display because this
    cy.findByLabelText("Delete Write more tests").should("not.exist");
  });
});

describe("existing admin user", () => {
  it("shows existing todos on initial load, supports adding a todo, toggling complete, and deleting the todo", () => {
    // Visit Elon with 50ms delay
    cy.visitUrl({
      userId: personas.manyTodos.id,
      delay: 50,
    });

    // First, assure existing todos display
    isInSection("Stuff to do", "Ship Model S");

    addTodo("Write more tests");
    toggleComplete("Write more tests");

    // Now delete the todo added above
    cy.findByLabelText("Delete Write more tests").click();
    cy.findByText("Write more tests").should("not.exist");
  });
});

describe("when marking a todo complete", () => {
  it("times out the request and throws an error if the call takes longer than 3 seconds", () => {
    const expectedError = "Oops! Updating the todo failed.";

    Cypress.on("uncaught:exception", (err, runnable) => {
      // Returning false here prevents Cypress from failing the test
      // So check for the expected error message.
      if (err.message.includes(expectedError)) return false;
      return true;
    });

    cy.visitUrl({
      userId: personas.manyTodos.id,
      customResponses: [
        {
          delay: 3100,
          endpointName: "toggleTodoCompleted",
        },
      ],
    });

    toggleComplete("Ship Cybertruck");
    cy.findByText(expectedError);
  });
});

describe("when adding a todo", () => {
  it("shows a loading status while the todo toggle is in progress, and hides the loading status when done before the timeout", () => {
    // Note that this visits a URL with a short loading delay set via the URL
  });
});

// Helper functions used by the tests above.
// ------------------------------------------

// Use parent to search within the heading's <section>
function isInSection(heading: string, text: string) {
  cy.findByRole("heading", { name: heading })
    .parent()
    .within(() => {
      cy.findByText(text);
    });
}

function addTodo(todo: string) {
  cy.findByLabelText("What do you need to do?").type(todo);
  cy.findByRole("button", { name: "Add" }).click();

  // Should show a loading indicator while adding
  cy.findByRole("button", { name: "Adding..." });

  // New todo should display
  isInSection("Stuff to do", todo);

  // Input should be cleared after submission
  cy.findByLabelText("What do you need to do?").should("be.empty");
}

function toggleComplete(todo: string) {
  // Mark as complete and assure it's marked with a line through
  cy.findByLabelText(todo).click();
  cy.findByText(todo).should("have.class", "line-through");

  // Mark as incomplete and assure line-through is removed.
  cy.findByLabelText(todo).click();
  cy.findByText(todo).should("not.have.class", "line-through");
}
