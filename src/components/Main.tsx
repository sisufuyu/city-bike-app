import { Box, Button, Typography } from '@mui/material'
import { useNavigate  } from 'react-router-dom'

import Background from './Background'
import QuiltedImageList from './QuiltedImageList'

const Main = () => {
  const navigate = useNavigate()

  const navigateToJourneys = () => {
    navigate('/journeys')
  }

  return (
    <Box>
      <Background children={<QuiltedImageList />} />
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
    </Box>
  )
}

export default Main