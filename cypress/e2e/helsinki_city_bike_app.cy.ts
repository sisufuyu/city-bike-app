describe('Helsinki city bike app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  before(() => {
    cy.createStation({
      id: 1,
      name: 'Kaivopuisto',
      address: 'Meritori 1',
      city: ' ',
      capacities: 30,
      x: 24.95021147,
      y: 60.15536962
    }).then(() => {
      cy.createStation({
        id: 2,
        name: 'Laivasillankatu',
        address: 'Laivasillankatu 14',
        city: '',
        capacities: 12,
        x: 24.95650977,
        y: 60.16098907
      }).then(() => {
        cy.createJourney({
          departure: new Date('2021-05-31T20:31:10.000Z'),
          return: new Date('2021-05-31T20:35:18.000Z'),
          departureStationId: 1,
          returnStationId: 2,
          coveredDistance: 618
        })
      })
    })
  })

  after(() => {
    cy.request('POST', 'testing/reset')
  })

  it('home page can be opened', () => {
    cy.contains('DISCOVER HELSINKI CITY LIFE')
  })

  it('stations page can be opened and render stations', () => {
    cy.get('[role=navigation]')
      .contains('stations')
      .click()

    cy.contains('All Stations')
    cy.contains('Kaivopuisto')
  })

  it('journys page can be opened and render journeys', () => {
    cy.get('[role=navigation]')
      .contains('journeys')
      .click()

    cy.contains('All Journeys')
    cy.contains('Laivasillankatu')
  })

  it('station page can be opened', () => {
    cy.get('[role=navigation]')
      .contains('stations')
      .click()
    
    cy.get('.station-btn:first')
      .click()

    cy.contains('Kaivopuisto')
    cy.contains('Meritori 1, Helsinki')
  })

  it('a new station can be created', () => {
    cy.get('[role=navigation]')
      .contains('stations')
      .click()

    cy.get('[role=navigation]')
      .contains('create new station')
      .click()

    cy.get('#id').type('3')
    cy.get('#name').type('Kapteeninpuistikko')
    cy.get('#address').type('Tehtaankatu 13')
    cy.get('#capacities').type('16')
    cy.get('#x').type('24.94501816')
    cy.get('#y').type('60.1581769')

    cy.get('.create-station-btn').click()

    cy.contains('Create new station successfully!')
  })

  it('create a new station fails when it existed already', () => {
    cy.get('[role=navigation]')
      .contains('stations')
      .click()

    cy.get('[role=navigation]')
      .contains('create new station')
      .click()

    cy.get('#id').type('1')
    cy.get('#name').type('Kaivopuisto')
    cy.get('#address').type('Meritori 1')
    cy.get('#capacities').type('30')
    cy.get('#x').type('24.95021147')
    cy.get('#y').type('60.15536962')

    cy.get('.create-station-btn').click()

    cy.contains('Create new station failed, please try again later!')
  })

  it('a new journey can be created', () => {
    cy.get('[role=navigation]')
      .contains('journeys')
      .click()

    cy.get('[role=navigation]')
      .contains('create new journey')
      .click()

    cy.get('#departureStationId').type('2')
    cy.get('#returnStationId').type('1')
    cy.get('#coveredDistance').type('2834')

    cy.get('.create-journey-btn').click()
    cy.contains('Create new journey successfully!')
  })

  it('create a new journey fails if station id does not exist', () => {
    cy.get('[role=navigation]')
      .contains('journeys')
      .click()

    cy.get('[role=navigation]')
      .contains('create new journey')
      .click()

    cy.get('#departureStationId').type('2')
    cy.get('#returnStationId').type('4')
    cy.get('#coveredDistance').type('2834')

    cy.get('.create-journey-btn').click()
    cy.contains('Create new journey failed, please try again later!')
  })
})
