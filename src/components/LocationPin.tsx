import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Typography, Box } from '@mui/material'

interface LocationPinProps {
  lat: number
  lng: number
  text: string
}

const LocationPin = ({ text }: LocationPinProps) => {
  return (
    <Box>
      <LocationOnIcon sx={{color: "primary.main"}} />
      <Typography>{text}</Typography>
    </Box>
  )
}

export default LocationPin