import axios from 'axios'

import { PaginationParams, CreateStationDTO } from '../type'

const baseUrl = 'http://localhost:4000/stations'

export const getStations = async ({ offset, limit }: PaginationParams) => {
  return await axios.get(`${baseUrl}?offset=${offset}&limit=${limit}`)
}

export const getOneStation = async (id: string) => {
  return await axios.get(`${baseUrl}/${id}`)
}

export const createStation = async (station: CreateStationDTO) => {
  return await axios.post(baseUrl, station)
}
