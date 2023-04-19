import { Box, Container, Button, Typography } from "@mui/material"
import QuiltedImageList from "./QuiltedImageList"

const Main = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "fixed",  
          zIndex: "modal",
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
        <Typography variant="h2" color="white" fontFamily="Futura PT DemiBold">
          DISCOVER HELSINKI CITY LIFE
        </Typography>
        <Button 
          variant="contained" 
          color="secondary"
          sx={{
            fontFamily: "Futura PT DemiBold",
            mt: 1,
          }}
        >
          VIEW THE JOURNEYS
        </Button>
        </Box>
      </Box>
      <Container
        maxWidth={false}
        sx={{ 
          position: "fixed", 
          left: 0, 
          right: 0, 
          top: 0, 
          bottom: 0, 
          zIndex: "speedDial",
          bgcolor: 'primary.main',
          opacity: 0.5,
        }}
      >
      </Container>
      <Box
        sx={{ 
          position: "fixed", 
          left: 0, 
          right: 0, 
          top: 0, 
          bottom: 0, 
          zIndex: "mobile stepper" 
        }}
      >
        <QuiltedImageList />
      </Box>
    </Box>
  )
}

export default Main