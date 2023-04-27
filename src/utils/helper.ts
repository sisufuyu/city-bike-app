import { Station } from "../type"

export const countDistance = (distance: number | undefined) => {
  if (distance) {
    return (distance/1000).toFixed(2)
  }
  return 0
}

export const countDuration = (duration: number | undefined) => {
  if (duration) {
    return (duration/60).toFixed(1)
  }
  return 0
}

export const formatAddress = (station: Station | undefined) => {
  if (!station) {
    return ''
  }
  return station?.city.trim() ? `${station?.address}, ${station?.city}` : `${station?.address}, Helsinki`
}