import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Typography, Box } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import Background from './Background'
import StandardImageList from './StandardImageList'
import Map from './Map'
import { StationWithJourneyInfo } from '../type'
import { getOneStation } from '../services/stationService'
import { formatAddress, countDistance } from '../utils/helper'

const Station = () => {
  const { id } = useParams()

  const [station, setStation] = useState<StationWithJourneyInfo>()
  const [error, setError] = useState<boolean>(false)

  const fetchStation = async (id: string | undefined) => {
    if (!id) return
    try {
      const response = await getOneStation(id)
      console.log('fetch')
      console.log(response?.data)
      setStation(response?.data)
    } catch(err) {
      console.log(err)
      setError(true)
    }
  } 

  useEffect(() => {
    fetchStation(id)
  }, [id])

  return (
    <Box>
      <Background children={<StandardImageList />} />
      <Box
        sx={{
          position: "fixed",  
          zIndex: "speedDial",
          minWidth: 1, 
          minHeight: 1,
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
        }}
      >
        {station &&
          <Container 
            sx={{
              borderRadius: 2,
              borderWidth: "3px", 
              borderStyle: "solid", 
              borderColor: "primary.light", 
              display: "flex", 
              justifyContent: "flex-start", 
              alignItems: "start",
              flexDirection: {xs: "column", sm: "column", md: "row"},
              backgroundColor: "white",
              px: 2,
              py: {xs: "1rem", sm: "1.5rem", md: "2.125rem"},
              mx: {xs: "0.5rem", sm: "1rem", md:"2.125rem"},
            }}
            className="station-card"
          >
            <Box>
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
                    sx={{ fontSize: {xs: "1.5rem", sm: "1.5rem", md: "2rem", lg: "2.125rem"}}}
                  >
                    {station.departureFrom.count}&nbsp;
                  </Typography>   
                </Box>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <Typography>Average distance:&nbsp;</Typography>
                  <Typography 
                    fontFamily="Konnect Thin Italic"
                    sx={{ fontSize: {xs: "1.5rem", sm: "1.5rem", md: "2rem", lg: "2.125rem"}}}
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
                    sx={{ fontSize: {xs: "1.5rem", sm: "1.5rem", md: "2rem", lg: "2.125rem"}}}
                  >
                    {station?.returnTo.count}&nbsp;
                  </Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>   
                  <Typography>Average distance:&nbsp;</Typography>
                  <Typography 
                    fontFamily="Konnect Thin Italic"
                    sx={{ fontSize: {xs: "1.5rem", sm: "1.5rem", md: "2rem", lg: "2.125rem"}}}
                  >
                    {countDistance(station.returnTo.avgDistance) + ' km'}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Map center={{lat: station.y, lng: station.x}} zoom={15} address={station.address} />
          </Container>
        }
        {error &&
          <Container 
            sx={{
              borderRadius: 2, 
              borderWidth: "3px", 
              borderStyle: "solid", 
              borderColor: "white",
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center",
              backgroundColor: "primary.light",
              px: 2,
              py: 2,
              mx: {xs: "0.5rem", sm: "1rem", md:"2.125rem"},
            }}
          >
            <Typography variant="h6">Oops, something went wrong. Please try again later!</Typography>
          </Container>
        }
      </Box>
    </Box>
  )
}

export default Station