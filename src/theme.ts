import { ThemeOptions, createTheme } from '@mui/material/styles'

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#315545',
      contrastText: '#ffffff',
      light: '#e1e5dc',
      dark: '#163832'
    },
    secondary: {
      main: '#ebc95b'
    },
    info: {
      main: '#91bdac'
    }
  },
  typography: {
    fontFamily: [
      'Konnect',
      'Konnect Bold',
      'Konnect Thin Italic',
      'TrainOne'
    ].join(',')
  }
}

const theme = createTheme(themeOptions)
theme.typography.h2 = {
  fontSize: '3.75rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.4rem'
  }
}

export default theme
