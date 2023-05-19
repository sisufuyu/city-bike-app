import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableBody,
  Button
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import StyledTableCell from 'components/StyledTableCell'
import StyledTableRow from 'components/StyledTableRow'
import { Station } from 'type'
import { formatAddress } from 'utils/helper'

const StationTable = ({ stations }: { stations: Station[] }) => {
  const navigate = useNavigate()

  const navigateToStation = (id: string) => {
    navigate(`/stations/${id}`)
  }
  return (
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
              <StyledTableCell align="left">
                {station.capacities}
              </StyledTableCell>
              <StyledTableCell align="left">
                <Button
                  variant="outlined"
                  onClick={() => navigateToStation(station._id)}
                >
                  View Station
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StationTable
