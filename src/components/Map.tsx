import GoogleMapReact from 'google-map-react'
import { Container } from '@mui/material'

import LocationPin from './LocationPin'
import { Center } from '../type'

interface MapProps {
  center: Center
  zoom: number
  address: string
}

const Map = ({ center, zoom, address }: MapProps) => {
  return (
    <Container sx={{width: {xs: 200, sm: 250, md: 300}, height: {xs: 200, sm: 250, md: 300}}}>
      <GoogleMapReact 
        bootstrapURLKeys={{ key: "AIzaSyAKC2ez_DPEQ0c6SEA0XEgUovbDbGBZV8A", language: "en" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationPin 
          lat={center.lat}
          lng={center.lng}
          text={address}
        />
      </GoogleMapReact>
    </Container>
  )
}

export default Map