describe("Submits a feedback form", () => {
  before(()=>{
    cy.visit('http://zero.webappsecurity.com/feedback.html')
  })

  it("Should fill in the name", () => {
    cy.get('#name').type("John Doe")
  })

  it("Should fill in the email address", () => {
    cy.get('#email').type('jdoe@example.com')
  })

  it("Should fill in the subject", () => {
    cy.get('#subject').type('YOUR HORRIBLE')
  })

  it("Should type a nasty comment", () => {
    cy.get('#comment').type("I clearly have an overinflated sense of my own importance because I'm writing to berate you for something that is clearly my fault. By the way, I happen to be very rich so I can do whatever I want.")
  })

  it("Should submit the form", () => {
    //Due to the lack of semantic naming on the example site
    cy.get('.btn-signin').click()

  })
})
