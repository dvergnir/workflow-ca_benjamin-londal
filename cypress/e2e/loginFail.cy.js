describe("Login flow", () => {
  beforeEach(() => {
    cy.wait(500);
    cy.visit("/");
  });
  it("Does not allow access without valid credentials", () => {
    cy
      .get("#registerModal button")
      .contains("Login")
      .should("be.visible")
      .wait(500)
      .click()
      .wait(500),
      cy
        .get(`input#loginEmail[name="email"]`)
        .type(String(Cypress.env("WRONG_EMAIL")));
    cy.get(`input#loginPassword[name="password"]`).type(
      String(Cypress.env("WRONG_PASSWORD"))
    );
    cy.get(`button[type="submit"]`).contains("Login").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Either your username was not found or your password is incorrect"
      );
    });
  });
});
