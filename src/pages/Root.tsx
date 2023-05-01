import { useState, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

import NavBar from '../components/NavBar'
import Message from '../components/Message'
import { MessageProps } from '../type'

export const ErrorMsgContext = createContext<MessageProps>({ 
  open: false, 
  setOpen: () => {},
  error: false, 
  setError: () => {},
  message: '',
  setMessage: () => {},
})

const Root = () => {
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <ErrorMsgContext.Provider value={{open, setOpen, message, setMessage, error, setError}}>
      <Box>
        <NavBar />
          <Message open={open} setOpen={setOpen} error={error} message={message} />
        <Outlet />
      </Box>
    </ErrorMsgContext.Provider>
  )
}

export default Root