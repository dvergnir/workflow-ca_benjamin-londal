const USER_EMAIL = "ronswanson@noroff.no";
const USER_PASSWORD = "bacon1337";

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
      cy.get(`input#loginEmail[name="email"]`).type(USER_EMAIL);
    cy.get(`input#loginPassword[name="password"]`).type(USER_PASSWORD);
    cy.get(`button[type="submit"]`).contains("Login").click();
    cy.wait(5000);
    cy.get("button").contains("Logout").click();
  });
});
