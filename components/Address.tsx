import { makeStyles, Typography } from '@material-ui/core'

interface AddressProps {
  street: string
  unit?: string | null
  postal_code: string
  city: string
  province: string
}

const useStyles = makeStyles((theme) => ({
  address: {
    fontStyle: 'normal',
  },
}))

export function Address({
  street,
  unit,
  postal_code,
  city,
  province,
}: AddressProps) {
  const classNames = useStyles()
  return (
    <address className={classNames.address}>
      <Typography variant='h6' component='p'>
        {street}
        {unit ? `, ${unit}` : null}
      </Typography>
      <Typography variant='body2' component='p'>
        {city}, {province} {postal_code}
      </Typography>
    </address>
  )
}
