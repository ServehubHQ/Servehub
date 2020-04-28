import { FormHelperText, Grid } from '@material-ui/core'
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useState, useEffect } from 'react'
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
  const { data, loading: dataLoading } = useJobsCreatePaymentQuery({
    variables: { jobId, userId },
  })
  const stripeClientSecret = useMemo(
    () => data?.jobs[0].stripe_payment_intent_client_secret,
    [data],
  )

  useEffect(() => {
    if (!stripeClientSecret && !dataLoading) {
      router.push(`/jobs/create/plan?id=${jobId}`)
    }
  }, [stripeClientSecret, dataLoading, router, jobId])

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
      activeStep={3}
      title='Payment'
      loading={loading}
      cta='Pay'
      actionExtra={<img src='/images/powered_by_stripe.svg' />}
      query={data}
    >
      <FormHelperText error>{error}</FormHelperText>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <StripeField
            Element={CardNumberElement}
            label='Card Number'
            margin='normal'
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <StripeField
            Element={CardExpiryElement}
            label='Expiry'
            margin='normal'
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <StripeField
            Element={CardCvcElement}
            label='CVC'
            margin='normal'
            required
            fullWidth
          />
        </Grid>
      </Grid>
    </CreateJobPage>
  )
}
