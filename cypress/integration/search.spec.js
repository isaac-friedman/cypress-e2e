describe("tests the search function", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com/");
  })

  it("Tries to search for something", () => {
    cy.get("#searchTerm").type("foo {enter}");
    cy.url().should('include', "search.html")
  })
})
