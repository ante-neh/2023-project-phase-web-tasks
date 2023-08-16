describe("AddContact", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/add");
  });

  it("should have a form with three input fields", () => {
    cy.get("form").should("exist");
    cy.get("[data-testid='fullName']").should("exist");
    cy.get("[data-testid='age']").should("exist");
    cy.get("[data-testid='department']").should("exist");
  });

  it("should submit the form and add a new contact to the list", () => {
    cy.get("[data-testid='fullName']").type("John Doe");
    cy.get("[data-testid='age']").type("30");
    cy.get("[data-testid='department']").type("Engineering");
    cy.get("[data-testid='submit-button']").click();

    cy.get("[data-testid='fullName']").should("contain", "John Doe");
    cy.get("[data-testid='age']").should("contain", "30");
    cy.get("[data-testid='department']").should("contain", "Engineering");
  });
});



  