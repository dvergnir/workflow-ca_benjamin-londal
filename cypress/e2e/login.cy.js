describe("LogInAndOut", () => {
  beforeEach(() => {
    cy.wait(500);
    cy.visit("/");
  });
  it("Can log in with valid credentials then log out with the logout button", () => {
    cy
      .get("#registerModal button")
      .contains("Login")
      .should("be.visible")
      .wait(500)
      .click()
      .wait(500),
      cy
        .get(`input#loginEmail[name="email"]`)
        .type(String(Cypress.env("USER_EMAIL")));
    cy.get(`input#loginPassword[name="password"]`).type(
      String(Cypress.env("USER_PASSWORD"))
    );
    cy.get(`button[type="submit"]`).contains("Login").click();
    cy.wait(1000);
    cy.then(() => {
      expect(localStorage.getItem("token")).to.not.equal(null);
    });
    cy.wait(1000);
    cy.get("button").contains("Logout").click();
    cy.then(() => {
      expect(localStorage.getItem("token")).to.equal(null);
    });
  });
});
