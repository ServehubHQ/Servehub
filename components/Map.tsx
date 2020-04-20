import { useMemo } from 'react'
import { config } from '../lib/config'

interface MapProps {
  street: string
  unit?: string | null
  city: string
  postal_code: string
  province: string
}

export function Map({ street, city, postal_code, province }: MapProps) {
  const query = useMemo(
    () =>
      encodeURIComponent(
        [
          street,
          // unit,
          city,
          postal_code,
          province,
          'CA',
        ].join(','),
      ),
    [street, city, postal_code, province],
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
