import { ThemeProvider } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Root from './pages/Root'
import Home from './pages/Home'
import theme from './theme'
import JourneyList from './components/JourneyList'
import StationList from './components/StationList'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="" element={<Home />} />
            <Route path="/journeys" element={<JourneyList />} />
            <Route path="/stations" element={<StationList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
