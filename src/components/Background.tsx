import { Box, Container } from '@mui/material'

const Background = ({ children }: { children: JSX.Element }) => {
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
          zIndex: "fab",
          bgcolor: 'primary.dark',
          opacity: 0.5
        }}
        className="mask"
      />
      <Box
        sx={{ 
          position: "fixed", 
          left: 0, 
          right: 0, 
          top: {xs: 56, sm: 56, md: 72}, 
          bottom: 0, 
          zIndex: "mobile stepper",
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Background