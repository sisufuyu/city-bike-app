describe('Helsinki city bike app', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  it('home page can be opened', () => {
    cy.contains('DISCOVER HELSINKI CITY LIFE')
  })
})
