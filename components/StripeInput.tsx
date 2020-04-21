import { CardNumberElement } from '@stripe/react-stripe-js'
import { StripeCardNumberElementOptions } from '@stripe/stripe-js'
import { Props, Ref, useImperativeHandle, useState } from 'react'

interface StripeInputProps<T> extends Props<T> {
  Element: T
  inputRef?: Ref<{ focus: () => void }>
  options?: StripeCardNumberElementOptions
}

export function StripeInput({
  Element,
  inputRef,
  options = {},
  ...elementProps
}: StripeInputProps<typeof CardNumberElement>) {
  const [element, setElement] = useState<{ focus: () => void }>()

  useImperativeHandle(
    inputRef,
    () => ({
      focus: () => {
        element?.focus()
      },
    }),
    [element],
  )

  return (
    <Element
      onReady={setElement}
      options={{
        style: {
          base: {
            '::placeholder': {
              color: 'transparent',
            },
          },
        },
        ...options,
      }}
      {...elementProps}
    />
  )
}
