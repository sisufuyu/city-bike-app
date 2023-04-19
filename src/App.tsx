import { ThemeProvider } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
