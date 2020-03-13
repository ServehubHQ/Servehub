import { Ref, useImperativeHandle, useState, useCallback, Props } from 'react'
import { CardNumberElement } from '@stripe/react-stripe-js'
import { StripeCardNumberElementOptions } from '@stripe/stripe-js'

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
      // hiding the value e.g. react-stripe-elements
    }),
    [element],
  )

  const handleReady = useCallback(
    (element) => {
      console.log(element)
      setElement(element)
    },
    [setElement],
  )

  return (
    <Element
      onReady={handleReady}
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
