import { Box, Container, Button, Typography } from '@mui/material'
import QuiltedImageList from './QuiltedImageList'
import { useNavigate  } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate()

  const navigateToJourneys = () => {
    navigate('/journeys')
  }

  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{ 
          position: "fixed", 
          left: 0, 
          right: 0, 
          top: 0, 
          bottom: 0, 
          zIndex: "speedDial",
          bgcolor: 'primary.dark',
          opacity: 0.5,
        }}
      >
      </Container>
      <Box
        sx={{
          position: "fixed",  
          zIndex: "speedDial",
          width: 1, 
          height: 1,
        }}
      >
        <Box 
          sx={{ 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 1,
            height: 1,
          }}
        >
        <Typography variant="h2" color="white" fontFamily="Train One">
          DISCOVER HELSINKI CITY LIFE
        </Typography>
        <Button 
          variant="contained" 
          color="secondary"
          sx={{
            mt: 1,
            fontFamily: "Konnect Bold",
            px: "1.25rem",
            py: 1
          }}
          onClick={navigateToJourneys}
        >
          VIEW THE JOURNEYS
        </Button>
        </Box>
      </Box>
      <Box
        sx={{ 
          position: "fixed", 
          left: 0, 
          right: 0, 
          top: 0, 
          bottom: 0, 
          zIndex: "mobile stepper",
        }}
      >
        <QuiltedImageList />
      </Box>
    </Box>
  )
}

export default Main