import { useState, useEffect, useCallback } from 'react'
import { 
  Box,
  Container, 
  Typography, 
  Table, 
  TableContainer, 
  Paper, 
  TableHead, 
  TableRow, 
  TableBody,
  Button 
} from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'

import { getStations } from 'services/stationService'
import { Station } from 'type'
import StyledTableCell from 'components/StyledTableCell'
import StyledTableRow from 'components/StyledTableRow' 
import StyledPagination from 'components/StyledPagination'
import { formatAddress } from 'utils/helper'
import useErrorMsgContext from 'hooks/useErrorMsgContext'

const StationList = () => {
  const [stations, setStations] = useState<Station[]>([])
  const [pageCount, setpageCount] = useState<number>(1)
  const [page, setPage] = useState<number>(1)
  const { setErr } = useErrorMsgContext()

  const fetchStations = useCallback(async (page: number) => {
    try {
    const offset = (page-1)*10
    const response = await getStations({ offset, limit: 10 })
    
    setStations(response?.data?.results)
    setpageCount(Math.ceil(response.data.total/10))
    } catch(err) {
      setErr('Get stations list failed, please try again later!')
    }
  }, [setErr])
  
  useEffect(() => {
    fetchStations(page)
  }, [fetchStations, page])

  const navigate = useNavigate()

  const navigateToStation = (id: string) => {
    navigate(`/stations/${id}`)
  }

  return(
    <Container sx={{my: "4.5rem"}}>
      <Box 
        sx={{
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          pt: "2rem", 
          pb: "1rem"
        }}
      >
        <Typography 
          variant="h5" 
          color="primary.main" 
          fontFamily="Konnect Bold"
          sx={{ pt: "2rem", pb: "1rem" }}
        >
          All Stations
        </Typography>
        <Link to="/stations/new">
          <Button variant="contained" color="secondary">
            Create new station
          </Button>
        </Link>
      </Box>
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
                {formatAddress(station)}
              </StyledTableCell>
              <StyledTableCell align="left">{station.capacities}</StyledTableCell>
              <StyledTableCell align="left">
                <Button variant="outlined" onClick={() => navigateToStation(station._id)}>
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