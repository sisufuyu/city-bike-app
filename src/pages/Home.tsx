import { Box } from "@mui/material"
import NavBar from '../components/NavBar'
import Main from '../components/Main'

const Home = () => {
  return (
   <Box sx={{ width: 1, height: 1, m: 0, p: 0 }}>
     <NavBar />
     <Main />
   </Box> 
  )
}

export default Home