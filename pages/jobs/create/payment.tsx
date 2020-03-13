import {
  Box,
  Button,
  Paper,
  Typography,
  FormHelperText,
} from '@material-ui/core'
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import { useCallback, useState, useMemo } from 'react'
import { CreateJobSteps } from '../../../components/CreateJobSteps'
import { Page } from '../../../components/Page'
import { StripeField } from '../../../components/StripeField'
import { useAuthRequired } from '../../../lib/useAuthRequired'
import { useJobsCreatePaymentQuery } from '../../../graphql-codegen'
import { useRouter } from 'next/router'

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
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | undefined>()
  const jobId = useMemo(() => router.query.id, [router])
  const { data } = useJobsCreatePaymentQuery({ variables: { jobId } })
  const stripeClientSecret = useMemo(
    () => data?.jobs[0].stripe_payment_intent_client_secret,
    [data],
  )

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      if (!stripe || !elements) return

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
      }
    },
    [stripe, elements, setError, stripeClientSecret],
  )

  return (
    <Page>
      <Paper>
        <Box p={2}>
          <Typography component='h1' variant='h5'>
            Create Job
          </Typography>

          <CreateJobSteps activeStep={3} />

          <form onSubmit={handleSubmit}>
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
                disabled={!stripe || !elements || !stripeClientSecret}
              >
                Next
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Page>
  )
}
