import { useContext } from 'react'
import ErrorMsgContext from '../context/ErrorMsgContext'

const useErrorMsgContext = () => {
  const { error, setOpen, setError, setMessage } = useContext(ErrorMsgContext)
  
  const setErr = (msg: string) => {
    setOpen(true)
    setError(true)
    setMessage(msg)
  }

  const setMsg = (msg: string) => {
    setOpen(true)
    setError(false)
    setMessage(msg)
  }

  return {
    error, 
    setErr,
    setMsg
  }
}

export default useErrorMsgContext