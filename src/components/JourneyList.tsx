import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { 
  Container, 
  Typography, 
  Table, 
  TableContainer, 
  Paper, 
  TableHead, 
  TableRow, 
  TableBody,
  Pagination  
} from '@mui/material'

import { Journey } from '../type'
import { getJourneys } from '../services/journeyService'
import { countDistance, countDuration } from '../utils/helper'
import { count } from 'console'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.primary.light,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const JourneyList = () => {
  const [journeys, setJourneys] = useState<Journey[]>([])
  const [pageCount, setpageCount] = useState<number>(0)
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

  const onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
    console.log(page)
  }
  
  return (
    <Container sx={{my: "4.5rem"}}>
      <Typography variant="h5" color="primary.main" fontFamily="Futura PT DemiBold" sx={{ pt: "2rem", pb: "1rem" }}>
        All Journeys
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="journeys table">
          <TableHead>
            <TableRow>
              <StyledTableCell>From</StyledTableCell>
              <StyledTableCell align="right">To</StyledTableCell>
              <StyledTableCell align="right">Distance&nbsp;(km)</StyledTableCell>
              <StyledTableCell align="right">Duration&nbsp;(min)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {journeys.map((journey) => (
            <StyledTableRow key={journey._id}>
              <StyledTableCell component="th" scope="row">
                {journey.departureStationName}
              </StyledTableCell>
              <StyledTableCell align="right">{journey.returnStationName}</StyledTableCell>
              <StyledTableCell align="right">{countDistance(journey.coveredDistance)}</StyledTableCell>
              <StyledTableCell align="right">{countDuration(journey.duration)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      <Container sx={{ my: "1rem", display: "flex", justifyContent: "center" }}>
        <Pagination count={pageCount} color="secondary" variant="outlined" onChange={onPageChange}/>
      </Container>
    </Container>
  )
}

export default JourneyList