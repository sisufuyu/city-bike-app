/// <reference types="cypress" />
import { CreateStationDTO, CreateJourneyDTO } from '../../src/type'

Cypress.Commands.add('createStation', (station: CreateStationDTO) => {
  cy.request('POST', 'stations', station)
}) 

Cypress.Commands.add('createJourney', (journey: CreateJourneyDTO) => {
  cy.request('POST', 'journeys', journey)
})