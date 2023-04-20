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