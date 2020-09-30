describe("Tests the forgot password flow", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com/login.html");
  });

  it("Checks that we're on the right page", () => {
    cy.url().should("include", "login.html");
  });

  it("Checks that the forgot password button works", () => {
    cy.get("a").contains("Forgot your password").click(); //Anti pattern but the page doesn't allow us to get much better
    cy.url().should("include", "forgot-password.html");
  });

  it("Fills the password reset form", () => {
    cy.get("#user_email").type("example@example.com {enter}");
  });

  it("Should display the form-submitted message", () => {
    cy.get(".offset3").contains("Your password will be sent");
  });
});
