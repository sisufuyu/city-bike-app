import { Container, Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

import Background from 'components/Background'
import StandardImageList from 'components/StandardImageList'

const NotFound = () => {
  return (
    <Box>
      <Background>
        <StandardImageList />
      </Background>
      <Box
        sx={{
          position: 'fixed',
          zIndex: 'speedDial',
          minWidth: 1,
          minHeight: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <Typography fontFamily="Train One" variant="h1" color="white">
            404
          </Typography>
          <Typography fontFamily="Konnect" variant="h5" color="white">
            The page doesn&apos;t exist or was removed!
          </Typography>
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              sx={{
                mt: 1,
                fontFamily: 'Konnect Bold',
                px: '1.25rem',
                py: 1
              }}
            >
              Back to Home
            </Button>
          </Link>
        </Container>
      </Box>
    </Box>
  )
}

export default NotFound
