import { useState, useEffect } from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

import { Journey } from 'type'
import { getJourneys } from 'services/journeyService'
import JourneyTable from './JourneyTable'
import StyledPagination from 'components/StyledPagination'
import useErrorMsgContext from 'hooks/useErrorMsgContext'

const Journeys = () => {
  const [journeys, setJourneys] = useState<Journey[]>([])
  const [pageCount, setPageCount] = useState<number>(1)
  const [page, setPage] = useState<number>(1)
  const { setErr } = useErrorMsgContext()

  useEffect(() => {
    const fetchJourneys = async (page: number) => {
      try {
        const offset = (page - 1) * 10
        const response = await getJourneys({ offset, limit: 10 })

        setJourneys(response.data.results)
        setPageCount(Math.ceil(response.data.total / 10))
      } catch (err) {
        setErr('Get journey list failed, please try again later!')
      }
    }

    fetchJourneys(page)
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
        <Typography variant="h5" color="primary.main" fontFamily="Konnect Bold">
          All Journeys
        </Typography>
        <Link to="/journeys/new">
          <Button variant="contained" color="secondary" role="navigation">
            create new journey
          </Button>
        </Link>
      </Box>
      <JourneyTable journeys={journeys} />
      <StyledPagination pageCount={pageCount} setPage={setPage} />
    </Container>
  )
}

export default Journeys
