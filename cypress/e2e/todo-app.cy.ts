import { UrlConfig } from "../../src/demo-app/types";
import * as mockUsers from "../../src/demo-app/mocks/users.mocks";

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

// Returns a URL with the provided DevTools config included in the querystring.
// TODO: Move to url utils?
function buildUrl(config: Partial<UrlConfig>) {
  const params = new URLSearchParams(location.search);
  Object.keys(config).forEach((key) => {
    params.append(key, encodeURI(config[key]));
  });
  return "http://127.0.0.1:5173/?" + params.toString();
}

describe("new user", () => {
  it("shows a welcome message, supports adding a todo, and hides the delete feature", () => {
    const url = buildUrl({
      userId: mockUsers.noTodos.id,
      delay: 50,
    });
    cy.visit(url);
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
    const url = buildUrl({
      userId: mockUsers.manyTodos.id,
      delay: 50,
    });
    cy.visit(url);

    // First, assure existing todos display
    isInSection("Stuff to do", "Ship Model S");

    addTodo("Write more tests");
    toggleComplete("Write more tests");

    // Now delete the todo added above
    cy.findByLabelText("Delete Write more tests").click();
    cy.findByText("Write more tests").should("not.exist");
  });
});

describe("when adding a todo", () => {
  it("shows a loading status while the todo toggle is in progress, and hides the loading status when done before the timeout", () => {
    // Note that this visits a URL with a short loading delay set via the URL
  });
});
