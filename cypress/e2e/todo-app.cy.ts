// Use parent to search within the heading's <section>
function isInSection(heading: string, text: string) {
  cy.findByRole("heading", { name: heading })
    .parent()
    .within(() => {
      cy.findByText(text);
    });
}

// Returns a URL with the provided DevTools config included in the querystring.
function buildUrl(config: Partial<DevToolsConfig>) {
  const params = new URLSearchParams(location.search);
  Object.keys(config).forEach((key) => {
    params.append(key, encodeURI(config[key]));
  });
  return "http://127.0.0.1:5173/?" + params.toString();
}
    // Visit Elon with 50ms delay on getTodos
    cy.visit(
      "http://127.0.0.1:5173/?devtools=%257B%2522user%2522%3A%257B%2522id%2522%3A3%2C%2522description%2522%3A%2522Many%2520todos%2522%2C%2522name%2522%3A%2522Elon%2522%2C%2522todos%2522%3A%255B%257B%2522id%2522%3A1%2C%2522todo%2522%3A%2522Ship%2520Model%2520S%2522%2C%2522completed%2522%3Atrue%257D%2C%257B%2522id%2522%3A2%2C%2522todo%2522%3A%2522Ship%2520Model%25203%2522%2C%2522completed%2522%3Atrue%257D%2C%257B%2522id%2522%3A3%2C%2522todo%2522%3A%2522Ship%2520Model%2520X%2522%2C%2522completed%2522%3Atrue%257D%2C%257B%2522id%2522%3A4%2C%2522todo%2522%3A%2522Ship%2520Cybertruck%2522%2C%2522completed%2522%3Afalse%257D%2C%257B%2522id%2522%3A5%2C%2522todo%2522%3A%2522Ship%2520Semi%2522%2C%2522completed%2522%3Afalse%257D%255D%257D%2C%2522autoReload%2522%3Atrue%2C%2522delay%2522%3A50%2C%2522mockApis%2522%3A%255B%257B%2522label%2522%3A%2522addTodo%2522%2C%2522delay%2522%3A0%2C%2522status%2522%3A200%257D%2C%257B%2522label%2522%3A%2522getTodos%2522%2C%2522delay%2522%3A0%2C%2522status%2522%3A200%257D%2C%257B%2522label%2522%3A%2522markTodoCompleted%2522%2C%2522delay%2522%3A0%2C%2522status%2522%3A200%257D%255D%257D"
    );

    // First, assure existing todos display
    isInSection("Stuff to do", "Ship Model S");

    // Now, add a new todo
    cy.findByLabelText("What do you need to do?").type("Write more tests");
    cy.findByRole("button", { name: "Add" }).click();

    // Should show a loading indicator while adding
    cy.findByRole("button", { name: "Adding..." });

    // New todo should display
    isInSection("Stuff to do", "Write more tests");

    // Input should be cleared after submission
    cy.findByLabelText("What do you need to do?").should("be.empty");

    // Mark as complete and assure it's marked with a line through
    cy.findByLabelText("Write more tests").click();
    cy.findByText("Write more tests").should("have.class", "line-through");

    // Mark as incomplete and assure line-through is removed.
    cy.findByLabelText("Write more tests").click();
    cy.findByText("Write more tests").should("not.have.class", "line-through");
  });

  it("shows a loading status while the todo add is in progress", () => {
    // Note that this visits a URL with a short loading delay set via the URL
  });
});
