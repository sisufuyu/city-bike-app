import { Typography, Box } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import { StationWithJourneyInfo } from '../../type'
import { formatAddress, countDistance } from '../../utils/helper'
import Map from '../../components/Map'

const StationInfo = ({ station }: { station: StationWithJourneyInfo }) => {
  return (
    <>
      <Box sx={{mr: 2}}>
        <Typography 
          fontFamily="Train One" 
          variant="h4" 
          sx={{fontSize: {xs: "1.8rem", sm:"2rem", md:"2.125rem"}}}
        >
          {station.name}
        </Typography>    
        <Box sx={{display: "flex", my: 2}}>
          <LocationOnIcon sx={{color: "primary.main"}} />
          <Typography>
            {formatAddress(station)}
          </Typography>
        </Box>
        <Box 
          sx={{
            display: "flex", 
            alignItems: {sm: "start", md:"center"}, 
            justifyContent: "flex-start",
            flexWrap: "wrap",
            flexDirection: {sm: "column", md: "row"},
            mt: 1,
          }}
        >
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Typography>
              Journeys start from this station: &nbsp;
            </Typography>
            <Typography 
              fontFamily="Konnect Thin Italic" 
              sx={{fontSize: {xs: "1.5rem", sm: "1.5rem", md: "2rem", lg: "2.125rem"}}}
            >
              {station.departureFrom.count}&nbsp;
            </Typography>   
          </Box>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Typography>Average distance:&nbsp;</Typography>
            <Typography 
              fontFamily="Konnect Thin Italic"
              sx={{fontSize: {xs: "1.5rem", sm: "1.5rem", md: "2rem", lg: "2.125rem"}}}
            >
              {countDistance(station.departureFrom.avgDistance) + ` km`}
            </Typography>
            </Box>
        </Box>
        <Box 
          sx={{
            display: "flex", 
            alignItems: {sm: "start", md:"center"}, 
            justifyContent: "flex-start",
            flexWrap: "wrap",
            flexDirection: {sm: "column", md: "row"},
            mt: 1,
          }}
        >
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Typography>
              Journeys return to this station: &nbsp;
            </Typography>
            <Typography 
              fontFamily="Konnect Thin Italic"
              sx={{fontSize: {xs: "1.5rem", sm: "1.5rem", md: "2rem", lg: "2.125rem"}}}
            >
              {station?.returnTo.count}&nbsp;
            </Typography>
          </Box>
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>   
            <Typography>Average distance:&nbsp;</Typography>
            <Typography 
              fontFamily="Konnect Thin Italic"
              sx={{fontSize: {xs: "1.5rem", sm: "1.5rem", md: "2rem", lg: "2.125rem"}}}
            >
              {countDistance(station.returnTo.avgDistance) + ' km'}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Map center={{lat: station.y, lng: station.x}} zoom={15} address={station.address} />
    </>
  )
}

export default StationInfo