import { ThemeProvider } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Root from './pages/Root'
import Home from './pages/Home'
import JourneyList from './pages/JourneyList'
import StationList from './pages/StationList'
import Station from './pages/Station'
import NotFound from './pages/NotFound'
import CreateJourney from './pages/CreateJourney'
import CreateStation from './pages/CreateStation'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="" element={<Home />} />
            <Route path="/journeys" element={<JourneyList />} />
            <Route path="/journeys/new" element={<CreateJourney />} />
            <Route path="/stations" element={<StationList />} />
            <Route path="/stations/:id" element={<Station />} />
            <Route path="/stations/new" element={<CreateStation />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
