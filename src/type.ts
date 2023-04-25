export interface Journey {
  _id: string
  departure: Date
  return: Date
  departureStationId: number
  departureStationName: string
  returnStationId: number
  returnStationName: string
  coveredDistance: number
  duration: number
}

export interface PaginationParams {
  offset: number
  limit: number
}

export interface Station {
  _id: string
  id: number
  name: string
  address: string
  city: string
  capacities: number
  x: number
  y: number
}

export interface StationCountAvg {
  count: number
  avgDistance: number
}

export type StationWithJourneyInfo = Station & {
  departureFrom: StationCountAvg
  returnTo: StationCountAvg
}

export interface Center {
  lat: number
  lng: number
}
