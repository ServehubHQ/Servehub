import { FieldProps } from '../../FieldProps'

export function StripeCustomerField({
  source,
  record = {},
}: FieldProps<{
  stripe_customer_id?: string
}>) {
  return (
    <a href={`https://dashboard.stripe.com/customers/${record[source]}`}>
      {record[source]}
    </a>
  )
}

StripeCustomerField.defaultProps = {
  addLabel: true,
}
