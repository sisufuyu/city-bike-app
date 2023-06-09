import { useState, useMemo } from 'react'
import { Box, Container, Typography, Stack, Button } from '@mui/material'
import { useFormik } from 'formik'
import { object, number, date } from 'yup'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider, DateTimeField } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs'
import { DateTimeValidationError } from '@mui/x-date-pickers/models'

import Background from 'components/Background'
import StandardImageList from 'components/StandardImageList'
import { createJourney } from 'services/journeyService'
import NumberField from 'components/NumberField'
import useErrorMsgContext from 'hooks/useErrorMsgContext'

interface CreateJourneyProps {
  departureStationId: string
  returnStationId: string
  coveredDistance: string
  departure: Dayjs
  return: Dayjs
}

const initialValues: CreateJourneyProps = {
  departureStationId: '',
  returnStationId: '',
  coveredDistance: '',
  departure: dayjs().subtract(1, 'hour'),
  return: dayjs()
}

const validationSchema = object({
  departureStationId: number().required().positive().integer(),
  returnStationId: number().required().positive().integer(),
  coveredDistance: number().required().integer().min(10),
  return: date().max(new Date(dayjs().toISOString())).required(),
  departure: date().max(new Date(dayjs().toISOString())).required()
})

const CreateJourney = () => {
  const now = dayjs()

  const [departureError, setDepartureError] =
    useState<DateTimeValidationError | null>(null)
  const [returnError, setReturnError] =
    useState<DateTimeValidationError | null>(null)

  const { setErr, setMsg } = useErrorMsgContext()

  const departureErrMsg = useMemo(() => {
    switch (departureError) {
      case 'maxDate':
      case 'maxTime': {
        return 'Journey duration should be more than 10 seconds'
      }
      case 'invalidDate': {
        return 'Departure time is not valid date'
      }
      default: {
        return ''
      }
    }
  }, [departureError])

  const returnErrMsg = useMemo(() => {
    switch (returnError) {
      case 'maxDate':
      case 'maxTime': {
        return 'Return time should not be later than now'
      }
      case 'invalidDate': {
        return 'Return time is not valid date'
      }
      default: {
        return ''
      }
    }
  }, [returnError])

  const handleSubmit = async (values: CreateJourneyProps) => {
    if (returnError || departureError) return

    const journey = {
      departureStationId: parseInt(values.departureStationId),
      returnStationId: parseInt(values.returnStationId),
      departure: values.departure.toDate(),
      return: values.return.toDate(),
      coveredDistance: parseInt(values.coveredDistance)
    }

    try {
      await createJourney(journey)

      setMsg('Create new journey successfully!')
    } catch (err) {
      setErr('Create new journey failed, please try again later!')
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit
  })

  const changeDepartureValue = (value: Dayjs | null) => {
    formik.setFieldValue('departure', value, true)
  }

  const changeReturnValue = (value: Dayjs | null) => {
    formik.setFieldValue('return', value, true)
  }

  const changeDepartureError = (error: DateTimeValidationError | null) => {
    setDepartureError(error)
  }

  const changeReturnError = (error: DateTimeValidationError | null) => {
    setReturnError(error)
  }

  return (
    <Box sx={{ width: 1, height: 1 }}>
      <Background>
        <StandardImageList />
      </Background>
      <Box
        sx={{
          position: 'absolute',
          zIndex: 'speedDial',
          top: '6rem',
          bottom: '6rem',
          width: 1,
          height: 1
        }}
      >
        <Container
          sx={{
            backgroundColor: 'white',
            borderRadius: 2,
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: 'primary.light',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            px: { xs: 1, sm: '2rem' },
            py: '1rem',
            width: { xs: 300, sm: 500 },
            height: 'fit-content',
            ml: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          <Typography sx={{ width: 'auto', my: 1, fontSize: '1.5rem' }}>
            Create New Journey
          </Typography>
          <Stack
            component="form"
            onSubmit={formik.handleSubmit}
            autoComplete="off"
            spacing={3}
            sx={{ width: 1, px: 1, py: 2 }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimeField', 'DateTimeField']}>
                <DateTimeField
                  id="departure"
                  name="departure"
                  label="Departure Time"
                  format="YYYY-MM-DD HH:mm:ss"
                  fullWidth
                  required
                  value={formik.values.departure}
                  maxDateTime={formik.values.return.subtract(10, 'second')}
                  onChange={changeDepartureValue}
                  onError={changeDepartureError}
                  slotProps={{
                    textField: {
                      helperText: departureErrMsg
                    }
                  }}
                />
                <DateTimeField
                  id="return"
                  name="return"
                  label="Return Time"
                  format="YYYY-MM-DD HH:mm:ss"
                  fullWidth
                  required
                  value={formik.values.return}
                  onChange={changeReturnValue}
                  maxDateTime={now}
                  onError={changeReturnError}
                  slotProps={{
                    textField: {
                      helperText: returnErrMsg
                    }
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
            <NumberField
              id="departureStationId"
              name="departureStationId"
              label="Departure Station ID"
              required={true}
              formik={formik}
            />
            <NumberField
              id="returnStationId"
              name="returnStationId"
              label="Target Station ID"
              required={true}
              formik={formik}
            />
            <NumberField
              id="coveredDistance"
              name="coveredDistance"
              label="Covered Distance"
              required={true}
              formik={formik}
            />
            <Button
              variant="contained"
              sx={{ color: 'secondary.main' }}
              type="submit"
              className="create-journey-btn"
            >
              Create
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default CreateJourney
