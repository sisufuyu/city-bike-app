import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Typography, Box } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import Background from './Background'
import StandardImageList from './StandardImageList'
import { StationWithJourneyInfo } from '../type'
import { getOneStation } from '../services/stationService'
import { formatAddress, countDistance } from '../utils/helper'

const Station = () => {
  const { id } = useParams()

  const [station, setStation] = useState<StationWithJourneyInfo>()

  const fetchStation = async (id: string) => {
    const response = await getOneStation(id)
    console.log(response)
    setStation(response?.data)
  } 

  useEffect(() => {
    if (id) {
      fetchStation(id)
    }
  }, [id])

  return (
    <Box>
      <Background children={<StandardImageList />} />
      <Box
        sx={{
          position: "fixed",  
          zIndex: "speedDial",
          width: 1, 
          height: 1,
        }}
      >
      <Container 
        sx={{
          width: 1, 
          height: 1,
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
        }}
      >
        <Container 
          sx={{
            borderRadius: 2, 
            borderWidth: 1, 
            borderStyle: "solid", 
            borderColor: "primary.light",
            display: "flex", 
            justifyContent: "flex-start", 
            alignItems: "start",
            flexDirection: "column",
            height: "50%",
            backgroundColor: "white",
            p: 2,
          }}
        >
          <Typography fontFamily="Train One" variant="h4">{station?.name}</Typography>    
          <Box sx={{display: "flex", my: 2}}>
            <LocationOnIcon />
            <Typography>
              {formatAddress(station)}
            </Typography>
          </Box>
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "flex-start", mt: 1,}}>
            <Typography>
              Journeys start from this station: &nbsp;
            </Typography>
            <Typography fontFamily="Konnect Thin Italic" fontSize="2.125rem">
              {station?.departureFrom.count}&nbsp;
            </Typography>   
            <Typography>Average distance:&nbsp;</Typography>
            <Typography fontFamily="Konnect Thin Italic" fontSize="2.125rem">
              {station?.departureFrom.avgDistance 
                ? countDistance(station?.departureFrom.avgDistance) + ` km`
                : ''
              }
            </Typography>
          </Box>
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "flex-start", mt: 1,}}>
            <Typography>
              Journeys return to this station: &nbsp;
            </Typography>
            <Typography fontFamily="Konnect Thin Italic" fontSize="2.125rem">
              {station?.returnTo.count}&nbsp;
            </Typography>   
            <Typography>Average distance:&nbsp;</Typography>
            <Typography fontFamily="Konnect Thin Italic" fontSize="2.125rem">
              {station?.returnTo.avgDistance
                ? countDistance(station?.returnTo.avgDistance) + ' km'
                : ''
              }
            </Typography>
          </Box>
        </Container>
      </Container>
      </Box>
    </Box>
  )
}

export default Station