import { createContext } from 'react'

import { MessageProps } from '../type'

const ErrorMsgContext = createContext<MessageProps>({ 
  open: false, 
  setOpen: () => {},
  error: false, 
  setError: () => {},
  message: '',
  setMessage: () => {},
})

export default ErrorMsgContext