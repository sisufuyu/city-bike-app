import { useState, useEffect } from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

import { getStations } from 'services/stationService'
import StationTable from './StationTable'
import { Station } from 'type'
import StyledPagination from 'components/StyledPagination'
import useErrorMsgContext from 'hooks/useErrorMsgContext'

const Stations = () => {
  const [stations, setStations] = useState<Station[]>([])
  const [pageCount, setpageCount] = useState<number>(1)
  const [page, setPage] = useState<number>(1)
  const { setErr } = useErrorMsgContext()

  useEffect(() => {
    const fetchStations = async (page: number) => {
      try {
        const offset = (page - 1) * 10
        const response = await getStations({ offset, limit: 10 })

        setStations(response?.data?.results)
        setpageCount(Math.ceil(response.data.total / 10))
      } catch (err) {
        setErr('Get stations list failed, please try again later!')
      }
    }

    fetchStations(page)
  }, [page])

  return (
    <Container sx={{ my: '4.5rem' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pt: '2rem',
          pb: '1rem'
        }}
      >
        <Typography
          variant="h5"
          color="primary.main"
          fontFamily="Konnect Bold"
          sx={{ pt: '2rem', pb: '1rem' }}
        >
          All Stations
        </Typography>
        <Link to="/stations/new">
          <Button variant="contained" color="secondary">
            Create new station
          </Button>
        </Link>
      </Box>
      <StationTable stations={stations} />
      <StyledPagination pageCount={pageCount} setPage={setPage} />
    </Container>
  )
}

export default Stations
