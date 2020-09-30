describe("Tests navbar links", () => {
  before(() =>{
    cy.visit('http://zero.webappsecurity.com/login.html')
  })

  afterEach(() => { //go back to the homepage
    cy.back()
  })

  it("Clicks the home link", () => {

  })

  it("Clicks the Online Banking link", () => {

  })

  it("Clicks the Feedback link", () => {

  })
})
