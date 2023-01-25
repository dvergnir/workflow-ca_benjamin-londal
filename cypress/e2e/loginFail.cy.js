const WRONG_EMAIL = "swonranson@noroff.no";
const WRONG_PASSWORD = "celery2000";

describe("Fail to log in", () => {
  beforeEach(() => {
    cy.wait(500);
    cy.visit("/");
  });
  it("Cannot log in without valid credentials", () => {
    cy
      .get("#registerModal button")
      .contains("Login")
      .should("be.visible")
      .wait(500)
      .click()
      .wait(500),
      cy.get(`input#loginEmail[name="email"]`).type(WRONG_EMAIL);
    cy.get(`input#loginPassword[name="password"]`).type(WRONG_PASSWORD);
    cy.get(`button[type="submit"]`).contains("Login").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Either your username was not found or your password is incorrect"
      );
    });
  });
});
