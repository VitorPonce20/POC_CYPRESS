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
    cy.get('li a').contains('Querying').click({})
    cy.get('h1').should('exist')
    
    
  })

} )

