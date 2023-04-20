import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

import NavBar from '../components/NavBar'

const Root = () => {
  return (
    <Box>
      <NavBar />
      <Outlet />
    </Box>
  )
}

export default Root