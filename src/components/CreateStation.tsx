import { useContext } from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Stack, 
  Button 
} from '@mui/material'
import { object, string, number } from 'yup'
import { useFormik } from 'formik'

import Background from './Background'
import StandardImageList from './StandardImageList'
import TextFieldWithError from './TextFieldWithError'
import NumberField from './NumberField'
import { ErrorMsgContext } from '../pages/Root'
import { createStation } from '../services/stationService'

const initialValues = {
  id: '',
  name: '',
  address: '',
  city: 'Helsinki',
  capacities: '',
  x: '',
  y: '',
}

const validationSchema = object({
  id: number().required().positive().integer(),
  name: string().required(),
  address: string().required(),
  city: string().optional(),
  capacities: number().required().positive().integer(),
  x: number().required(),
  y: number().required(),
})

const CreateStation = () => {
  const {setOpen, setError, setMessage } = useContext(ErrorMsgContext)

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
      const station = {
        ...values,
        id: parseInt(values.id),
        capacities: parseInt(values.capacities),
        x: parseFloat(values.x),
        y: parseFloat(values.y),
      }
      try {
        await createStation(station)

        setOpen(true)
        setError(false)
        setMessage('Create new station successfully!')
      } catch (err) {
        console.log(err)
        setOpen(true)
        setError(true)
        setMessage('Create new station failed, please try again later!')
      }
    }
  })

  return (
    <Box sx={{width: 1, height: 1}}>
      <Background children={<StandardImageList />} />
      <Box
        sx={{
          width: 1, 
          height: 1,
          position: "absolute",  
          zIndex: "speedDial",
          top: "6rem",
          bottom: "6rem",
        }}
      >
        <Container
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            borderWidth: "3px", 
            borderStyle: "solid", 
            borderColor: "primary.light", 
            display: "flex", 
            justifyContent: "flex-start", 
            alignItems: "center",
            flexDirection: "column",
            px: {xs:1, sm: "2rem"},
            width: {xs: 300, sm: 500},
            height: "fit-content",
            ml: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Typography sx={{width: "auto", my: 1, fontSize: "1.5rem"}}>
            Create New Station
          </Typography>
          <Stack
            component="form"
            onSubmit={formik.handleSubmit}
            autoComplete="off"
            spacing={3}
            sx={{width: 1, px: 1, py: 2, height: "auto"}}
          >
            <NumberField id="id" name="id" label="ID" required={true} formik={formik} />
            <TextFieldWithError id="name" name="name" label="Name" required={true} formik={formik} />
            <TextFieldWithError id="address" name="address" label="Address" required={true} formik={formik} />
            <TextFieldWithError id="city" name="city" label="City" required={false} formik={formik} />
            <NumberField id="capacities" name="capacities" label="Capacities" required={true} formik={formik} />
            <NumberField id="y" name="y" label="Latitude" required={true} formik={formik} />
            <NumberField id="x" name="x" label="Longitude" required={true} formik={formik} />
            <Button variant="contained" sx={{color: "secondary.main"}} type="submit">Create</Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default CreateStation