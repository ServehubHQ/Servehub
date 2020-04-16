import { makeStyles } from '@material-ui/core'

interface AddressProps {
  address: {
    street: string
    unit?: string
    postalCode: string
    city: string
    province: string
  }
}

const useStyles = makeStyles((theme) => ({
  address: {
    fontStyle: 'normal',
  },
}))

export function Address({ address }: AddressProps) {
  const classNames = useStyles()
  return (
    <address className={classNames.address}>
      {address.street}
      {address.unit ? `, ${address.unit}` : null}
      <br />
      {address.city}, {address.province}
    </address>
  )
}
