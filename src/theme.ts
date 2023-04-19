import { ThemeOptions } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#354a47',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ebc95b',
    },
    info: {
      main: '#91bdac',
    },
  },
  typography: {
    fontFamily: 'Futura PT DemiBold'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Futura PT DemiBold';
          font-style: normal;
          font-weight: normal;
          src: local('Futura PT DemiBold'), url('futura-pt-demibold-589e43b852117.woff') format('woff');
        }
      `
    }
  }
}

const theme = createTheme(themeOptions)
theme.typography.h2 = {
  fontSize: '3.75rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.4rem',
  },
}

export default theme