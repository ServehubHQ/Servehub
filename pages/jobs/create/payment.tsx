import { Box, Button, Paper, Typography } from '@material-ui/core'
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import { useCallback } from 'react'
import { CreateJobSteps } from '../../../components/CreateJobSteps'
import { Page } from '../../../components/Page'
import { StripeField } from '../../../components/StripeField'
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
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      if (!stripe || !elements) return

      const card = elements.getElement(CardNumberElement)
      console.log('card', card)

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: card!,
      })

      if (error) {
        console.log('[error]', error)
      } else {
        console.log('[PaymentMethod]', paymentMethod)
      }
    },
    [stripe, elements],
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
                disabled={!stripe || !elements}
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
