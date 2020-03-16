import { useMemo } from 'react'
import { JobMapTargetFragment } from '../graphql-codegen'
import { config } from '../lib/config'

interface CreateJobSteps {
  target: JobMapTargetFragment
}

export function JobMap({ target }: CreateJobSteps) {
  const query = useMemo(
    () =>
      encodeURIComponent(
        [
          target.street,
          // target.unit,
          target.city,
          target.postal_code,
          target.province,
          'CA',
        ].join(','),
      ),
    [target],
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
