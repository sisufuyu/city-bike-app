import { styled } from '@mui/material/styles'
import { TableRow } from '@mui/material'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.primary.light
  },
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

export default StyledTableRow
