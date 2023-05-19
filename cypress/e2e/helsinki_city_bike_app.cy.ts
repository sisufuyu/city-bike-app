describe('Helsinki city bike app', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  it('home page can be opened', () => {
    cy.contains('DISCOVER HELSINKI CITY LIFE')
  })

  it('stations page can be opened and contains stations', () => {
    cy.get('[role=navigation]')
      .contains('stations')
      .click()

    cy.contains('All Stations')
    cy.contains('Kaivopuisto')
  })

  it('journys page can be opened and contains journeys', () => {
    cy.get('[role=navigation]')
    .contains('journeys')
    .click()

    cy.contains('All Journeys')
    cy.contains('Linnanmäki')
  })
})
