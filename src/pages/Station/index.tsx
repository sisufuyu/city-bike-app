import { useParams } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import { Container, Box } from '@mui/material'

import Background from 'components/Background'
import StandardImageList from 'components/StandardImageList'
import { StationWithJourneyInfo } from 'type'
import { getOneStation } from 'services/stationService'
import useErrorMsgContext from 'hooks/useErrorMsgContext'
import StationInfo from './StationInfo'
import StationSkeleton from './StationSkeleton'

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
        <Container 
          sx={{
            borderRadius: "0.5rem",
            borderWidth: "3px", 
            borderStyle: "solid", 
            borderColor: "primary.light", 
            display: "flex", 
            justifyContent: "space-between", 
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
          {
            station ? (
              <StationInfo station={station} />
            ) : (
              <StationSkeleton />
            )
          }
        </Container>
      </Box>
    </Box>
  )
}

export default Station