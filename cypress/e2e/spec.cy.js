describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
      
  })
})

context('my first test', ()=>{
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('has an h1 on the page', () => {
    cy.get('h1').should('exist')

  })

  it('access querying page', () => {
    cy.get('li a').contains('Querying')
    cy.get('h1').should('exist')
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click()

    cy.visit('https://google.com')
    
    
    
    
  })

} )
