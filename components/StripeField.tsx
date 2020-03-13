import {
  FilledInput,
  FormControl,
  InputLabel,
  PropTypes,
  FormHelperText,
} from '@material-ui/core'
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
} from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'
import { StripeInput } from './StripeInput'

interface StripeFieldProps {
  Element:
    | typeof CardElement
    | typeof CardNumberElement
    | typeof CardExpiryElement
    | typeof CardCvcElement
  label: string
  required?: boolean
  fullWidth?: boolean
  margin: PropTypes.Margin
}

export function StripeField({
  Element,
  label,
  ...controlProps
}: StripeFieldProps) {
  const elements = useElements()
  const [isEmpty, setIsEmpty] = useState(true)
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    const element = elements?.getElement((Element as unknown) as 'card')
    element?.on('change', (event: StripeCardElementChangeEvent) => {
      setIsEmpty(event.empty)
      setError(event.error?.message)
    })
  }, [Element, elements, setIsEmpty, setError])

  return (
    <FormControl variant='filled' error={Boolean(error)} {...controlProps}>
      <InputLabel htmlFor='expiry' shrink={!isEmpty || undefined}>
        {label}
      </InputLabel>
      <FilledInput
        id='expiry'
        inputComponent={StripeInput as any}
        inputProps={{ Element }}
      />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  )
}
