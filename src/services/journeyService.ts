import axios from 'axios'

import { PaginationParams, CreateJourneyDTO } from '../type'

const baseUrl = 'http://localhost:4000/journeys'

export const getJourneys = async ({ offset, limit }: PaginationParams) => {
  return await axios.get(`${baseUrl}?offset=${offset}&limit=${limit}`)
}

export const createJourney = async (journey: CreateJourneyDTO) => {
  return await axios.post(baseUrl, journey)
}
