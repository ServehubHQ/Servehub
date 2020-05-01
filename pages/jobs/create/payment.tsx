import {
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { CreateJobPage } from '../../../components/CreateJobPage'
import { Inline } from '../../../components/Inline'
import { Money } from '../../../components/Money'
import { StripeField } from '../../../components/StripeField'
import { useJobsCreatePaymentQuery } from '../../../graphql-codegen'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'
import { Stack } from '../../../components/Stack'
import { timeout } from '../../../lib/timeout'

const useClassNames = makeStyles((theme) => ({
  money: {
    color: theme.palette.primary.main,
  },
  moneyText: {
    borderRight: `1px solid ${theme.palette.grey[200]}`,
    paddingRight: theme.spacing(2),
  },
}))

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
  const classNames = useClassNames()
  const { userId } = useAuth()
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | undefined>()
  const [retries, setRetries] = useState(0)
  const [loading, setLoading] = useState(false)
  const jobId = useMemo(() => router.query.id, [router])
  const { data, loading: dataLoading, refetch } = useJobsCreatePaymentQuery({
    variables: { jobId, userId },
  })
  const stripeClientSecret = useMemo(
    () => data?.job?.stripe_payment_intent_client_secret,
    [data],
  )

  useEffect(() => {
    if (!stripeClientSecret && !dataLoading) {
      if (retries > 3) {
        router.push(`/jobs/create/plan?id=${jobId}`)
      } else {
        timeout(100 * retries).then(() => {
          refetch()
          setRetries(retries + 1)
        })
      }
    }
  }, [
    stripeClientSecret,
    dataLoading,
    router,
    jobId,
    retries,
    setRetries,
    refetch,
  ])

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
      <CardHeader title='Payment' />
      <Divider />
      <CardContent>
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
      </CardContent>
      <Divider />
      <CardContent>
        {data?.job?.plan ? (
          <Inline align='flex-end'>
            <Stack
              spacing={0}
              align='flex-end'
              className={classNames.moneyText}
            >
              <Typography variant='h6' component='span'>
                {data.job.plan.name}
              </Typography>

              <Typography>{`${data.job.plan.attempts} attempt${
                data.job.plan.attempts > 1 ? 's' : ''
              } in ${data.job.plan.duration}`}</Typography>
            </Stack>

            <Typography variant='h5' component='span'>
              <Money
                cents={(data.job.plan.fee || 0) + (data.job.plan.bounty || 0)}
                className={classNames.money}
              />
            </Typography>
          </Inline>
        ) : null}
      </CardContent>
    </CreateJobPage>
  )
}
