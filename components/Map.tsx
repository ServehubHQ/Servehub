import { useMemo } from 'react'
import { config } from '../lib/config'
import { encodeLocation } from '../lib/encodeLocation'

interface MapProps {
  street: string
  unit?: string | null
  city: string
  postal_code: string
  province: string
}

export function Map(location: MapProps) {
  const query = useMemo(() => encodeLocation(location), [location])
  return (
    <iframe
      width='100%'
      height='100%'
      frameBorder='0'
      style={{ width: '100%', height: '100%', display: 'block' }}
      src={`https://www.google.com/maps/embed/v1/place?key=${config.googleMapsApiKey}&q=${query}`}
    />
  )
}
