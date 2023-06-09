import { FormikProps } from 'formik/dist/types'

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

export interface CreateJourneyDTO {
  departure: Date
  return: Date
  departureStationId: number
  returnStationId: number
  coveredDistance: number
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

export interface MessageProps {
  open: boolean
  setOpen: (open: boolean) => void
  error: boolean
  setError: (error: boolean) => void
  message: string
  setMessage: (message: string) => void
}

export interface CreateStationDTO {
  id: number
  name: string
  address: string
  city?: string
  capacities: number
  x: number
  y: number
}

export interface FieldProps {
  id: string
  name: string
  label: string
  required: boolean
  formik: FormikProps<any>
}
