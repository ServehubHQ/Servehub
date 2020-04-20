import { makeStyles } from '@material-ui/core'

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
      {street}
      {unit ? `, ${unit}` : null}
      <br />
      {postal_code}
      <br />
      {city}, {province}
    </address>
  )
}
