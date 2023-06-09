import axios from 'axios'

import { PaginationParams, CreateStationDTO } from '../type'

const apiUrl = process.env.REACT_APP_API_BASE_URL
const baseUrl = `${apiUrl}/stations`

export const getStations = async ({ offset, limit }: PaginationParams) => {
  return await axios.get(`${baseUrl}?offset=${offset}&limit=${limit}`)
}

export const getOneStation = async (id: string) => {
  return await axios.get(`${baseUrl}/${id}`)
}

export const createStation = async (station: CreateStationDTO) => {
  return await axios.post(baseUrl, station)
}
