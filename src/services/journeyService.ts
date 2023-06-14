import axios from 'axios'

import { PaginationParams, CreateJourneyDTO } from '../type'

const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/journeys`

export const getJourneys = async ({ offset, limit }: PaginationParams) => {
  return await axios.get(`${baseUrl}?offset=${offset}&limit=${limit}`)
}

export const createJourney = async (journey: CreateJourneyDTO) => {
  return await axios.post(baseUrl, journey)
}
