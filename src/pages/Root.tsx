import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

import NavBar from 'components/NavBar'
import Message from 'components/Message'
import ErrorMsgContext from 'context/ErrorMsgContext'

const Root = () => {
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <ErrorMsgContext.Provider value={{open, setOpen, message, setMessage, error, setError}}>
      <Box sx={{width: 1, height: 1}}>
        <NavBar />
          <Message open={open} setOpen={setOpen} error={error} message={message} />
        <Outlet />
      </Box>
    </ErrorMsgContext.Provider>
  )
}

export default Root