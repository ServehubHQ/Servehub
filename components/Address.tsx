import { makeStyles, Typography } from '@material-ui/core'

interface AddressProps {
  street: string
  unit?: string | null
  postal_code: string
  city: string
  province: string
  highlightStreet?: boolean
  typeVariant?:
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'overline'
    | 'srOnly'
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
  highlightStreet = false,
  typeVariant = 'body2',
}: AddressProps) {
  const classNames = useStyles()
  return (
    <address className={classNames.address}>
      <Typography variant={highlightStreet ? 'h6' : typeVariant} component='p'>
        {street}
        {unit ? `, ${unit}` : null}
      </Typography>
      <Typography variant={typeVariant} component='p'>
        {city}, {province} {postal_code}
      </Typography>
    </address>
  )
}
