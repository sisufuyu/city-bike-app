import { TextField } from '@mui/material'

import { FieldProps } from '../type'

const TextFieldWithError = ({ id, name, label, required, formik }: FieldProps) => {
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
    />
  )
}

export default TextFieldWithError