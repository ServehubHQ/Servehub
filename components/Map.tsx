import { useMemo } from 'react'
import { config } from '../lib/config'

interface MapProps {
  street: string
  unit?: string
  city: string
  postalCode: string
  province: string
}

export function Map({ street, city, postalCode, province }: MapProps) {
  const query = useMemo(
    () =>
      encodeURIComponent(
        [
          street,
          // unit,
          city,
          postalCode,
          province,
          'CA',
        ].join(','),
      ),
    [street, city, postalCode, province],
  )
  return (
    <iframe
      width='100%'
      height='100%'
      frameBorder='0'
      style={{ width: '100%', height: '100%' }}
      src={`https://www.google.com/maps/embed/v1/place?key=${config.googleMapsApiKey}&q=${query}`}
    />
  )
}
