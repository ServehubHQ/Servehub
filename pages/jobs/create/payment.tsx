import { Box, Button, FormHelperText } from '@material-ui/core'
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useState } from 'react'
import { CreateJobPage } from '../../../components/CreateJobPage'
import { StripeField } from '../../../components/StripeField'
import { useJobsCreatePaymentQuery } from '../../../graphql-codegen'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'

interface FormData {
  name: string
  street: string
  unit?: string
  postalCode: string
  city: string
  province: string
}

export default function JobsCreatePaymentPage() {
  useAuthRequired()
  const router = useRouter()
  const { userId } = useAuth()
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | undefined>()
  const [loading, setLoading] = useState(false)
  const jobId = useMemo(() => router.query.id, [router])
  const { data } = useJobsCreatePaymentQuery({ variables: { jobId, userId } })
  const stripeClientSecret = useMemo(
    () => data?.jobs[0].stripe_payment_intent_client_secret,
    [data],
  )

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      if (!stripe || !elements) return

      setLoading(true)

      const card = elements.getElement(CardNumberElement)
      if (!card) {
        throw new Error('Unable to locate Stripe CardNumberElement')
      }

      const { error } = await stripe.confirmCardPayment(stripeClientSecret!, {
        payment_method: { card },
        save_payment_method: true,
      })

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      router.push(`/jobs/${jobId}`)
    },
    [stripe, elements, setError, stripeClientSecret, router, jobId],
  )
  return (
    <CreateJobPage
      onSubmit={handleSubmit}
      activeStep={2}
      title='Payment'
      loading={loading}
    >
      <FormHelperText error>{error}</FormHelperText>

      <StripeField
        Element={CardNumberElement}
        label='Card Number'
        margin='normal'
        required
        fullWidth
      />
      <StripeField
        Element={CardExpiryElement}
        label='Expiry'
        margin='normal'
        required
        fullWidth
      />
      <StripeField
        Element={CardCvcElement}
        label='CVC'
        margin='normal'
        required
        fullWidth
      />

      <Box mt={2} display='flex' justifyContent='flex-end'>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          disabled={!stripe || !elements || !stripeClientSecret || loading}
        >
          Next
        </Button>
      </Box>
    </CreateJobPage>
  )
}
