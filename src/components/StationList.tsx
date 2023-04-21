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
  Pagination,
  Button 
} from '@mui/material'

import { getStations } from '../services/stationService'
import { Station } from '../type'
import StyledTableCell from './StyledTableCell'
import StyledTableRow from './StyledTableRow' 
import StyledPagination from './StyledPagination'

const StationList = () => {
  const [stations, setStations] = useState<Station[]>([])
  const [pageCount, setpageCount] = useState<number>(0)
  const [page, setPage] = useState<number>(1)

  const fetchStations = async (page: number) => {
    const offset = (page-1)*10
    const response = await getStations({ offset, limit: 10 })
    console.log(response)
    setStations(response.data.results)
    setpageCount(Math.ceil(response.data.total/10))
  }
  
  useEffect(() => {
    fetchStations(page)
  }, [page])

  return(
    <Container sx={{my: "4.5rem"}}>
      <Typography variant="h5" color="primary.main" sx={{ pt: "2rem", pb: "1rem" }}>
        All Stations
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="journeys table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Address</StyledTableCell>
              <StyledTableCell align="left">Capacity</StyledTableCell>
              <StyledTableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
          {stations.map((station) => (
            <StyledTableRow key={station._id}>
              <StyledTableCell component="th" scope="row">
                {station.id}
              </StyledTableCell>
              <StyledTableCell align="left">{station.name}</StyledTableCell>
              <StyledTableCell align="left">
                {station.city.trim() ? `${station.address}, ${station.city}` : `${station.address}, Helsinki`}
              </StyledTableCell>
              <StyledTableCell align="left">{station.capacities}</StyledTableCell>
              <StyledTableCell align="left">
                <Button variant="contained">
                  View Station
                </Button>
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

export default StationList