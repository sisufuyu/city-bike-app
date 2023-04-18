import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'

import Home from './pages/Home'
import { themeOptions } from './theme'

const theme = createTheme(themeOptions)


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
