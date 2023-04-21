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
