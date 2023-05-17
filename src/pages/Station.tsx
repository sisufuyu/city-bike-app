import { useParams } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import { Container, Typography, Box } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import Background from '../components/Background'
import StandardImageList from '../components/StandardImageList'
import Map from '../components/Map'
import { StationWithJourneyInfo } from '../type'
import { getOneStation } from '../services/stationService'
import { formatAddress, countDistance } from '../utils/helper'
import useErrorMsgContext from '../hooks/useErrorMsgContext'

const Station = () => {
  const { id } = useParams()

  const [station, setStation] = useState<StationWithJourneyInfo>()
  const { setErr } = useErrorMsgContext()

  const fetchStation = useCallback(async (id: string | undefined) => {
    if (!id) return
    try {
      const response = await getOneStation(id)

      setStation(response?.data)
    } catch(err) {
      setErr('Get station information failed, please try again later!')
    }
  }, [setErr])

  useEffect(() => {
    fetchStation(id)
  }, [fetchStation, id])

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
              borderRadius: "0.5rem",
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
              minHeight: 373,
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
      </Box>
    </Box>
  )
}

export default Station