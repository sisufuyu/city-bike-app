import { TextField } from '@mui/material'

import { FieldProps } from '../type'

const NumberField = ({ id, name, label, required, formik }: FieldProps) => {
  return (
    <TextField
      id={id}
      name={name}
      label={label}
      fullWidth
      required={required}
      value={formik.values[name]}
      onChange={formik.handleChange}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.errors[name] as string}
      onBlur={formik.handleBlur}
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*.?[0-9]*' }}
    />
  )
}

export default NumberField
