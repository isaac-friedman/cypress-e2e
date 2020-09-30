describe("Tests navbar links", () => {
  before(() =>{
    cy.visit('http://zero.webappsecurity.com/')
  })

  afterEach(() => { //go back to the homepage
    cy.go('back')
  })

  it("Clicks the home link", () => {
    cy.get('#homeMenu').click();
    cy.url().should('include', 'index.html')
  })

  it("Clicks the Online Banking link", () => {
    cy.get('#onlineBankingMenu').click()
    cy.url().should('include', 'online-banking.html')
  })

  it("Clicks the Feedback link", () => {
    cy.get('#feedback').click()
    cy.url().should('include', 'feedback.html')
  })
})
