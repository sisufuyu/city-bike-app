import { CreateJourneyDTO, CreateStationDTO } from '../../src/type'

declare global {
  namespace Cypress {
    interface Chainable {
      createStation(station: CreateStationDTO): Chainable<any>
      createJourney(journey: CreateJourneyDTO): Chainable<any>
    }
  }
}

export {};