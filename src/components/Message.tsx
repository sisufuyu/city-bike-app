import { SyntheticEvent } from 'react'
import { Snackbar, Alert } from '@mui/material'

import { MessageProps } from '../type'

const Message = ({ open, setOpen, message, error }: Omit<MessageProps, 'setError' | 'setMessage'>) => {
  const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={5000}
      sx={{
        position: "fixed",  
        zIndex: "appBar",
      }}
    >
      <Alert onClose={handleClose} severity={error ? "error": "success"} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>  
  )
}

export default Message