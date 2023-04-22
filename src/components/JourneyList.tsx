import { useState, useEffect } from 'react'
import { 
  Container, 
  Typography, 
  Table, 
  TableContainer, 
  Paper, 
  TableHead, 
  TableRow, 
  TableBody,
} from '@mui/material'

import { Journey } from '../type'
import { getJourneys } from '../services/journeyService'
import { countDistance, countDuration } from '../utils/helper'
import StyledTableCell from './StyledTableCell'
import StyledTableRow from './StyledTableRow' 
import StyledPagination from './StyledPagination'

const JourneyList = () => {
  const [journeys, setJourneys] = useState<Journey[]>([])
  const [pageCount, setpageCount] = useState<number>(1)
  const [page, setPage] = useState<number>(1)

  const fetchJourneys = async (page: number) => {
    const offset = (page-1)*10
    const response = await getJourneys({ offset, limit: 10 })
    console.log(response)
    setJourneys(response.data.results)
    setpageCount(Math.ceil(response.data.total/10))
  }

  useEffect(() => {
    fetchJourneys(page)
  }, [page])
  
  return (
    <Container sx={{my: "4.5rem"}}>
      <Typography 
        variant="h5" 
        color="primary.main"
        fontFamily="Konnect Bold"
        sx={{ pt: "2rem", pb: "1rem" }}
      >
        All Journeys
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="journeys table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">From</StyledTableCell>
              <StyledTableCell align="left">To</StyledTableCell>
              <StyledTableCell align="left">Distance&nbsp;(km)</StyledTableCell>
              <StyledTableCell align="left">Duration&nbsp;(min)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {journeys.map((journey) => (
            <StyledTableRow key={journey._id}>
              <StyledTableCell component="th" scope="row">
                {journey.departureStationName}
              </StyledTableCell>
              <StyledTableCell align="left">
                {journey.returnStationName}
              </StyledTableCell>
              <StyledTableCell align="left">
                {countDistance(journey.coveredDistance)}
              </StyledTableCell>
              <StyledTableCell align="left">
                {countDuration(journey.duration)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      <StyledPagination pageCount={pageCount} setPage={setPage} />
    </Container>
  )
}

export default JourneyList