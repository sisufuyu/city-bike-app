import { 
  Table, 
  TableContainer, 
  Paper, 
  TableHead, 
  TableRow, 
  TableBody,
} from '@mui/material'

import { countDistance, countDuration } from 'utils/helper'
import StyledTableCell from 'components/StyledTableCell'
import StyledTableRow from 'components/StyledTableRow' 
import { Journey } from 'type'

const JourneyTable = ({ journeys }: { journeys: Journey[] }) => {
  return (
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
  )
}

export default JourneyTable