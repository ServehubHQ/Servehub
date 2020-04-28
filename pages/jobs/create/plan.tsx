import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'
import fetch from 'cross-fetch'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useState, useEffect } from 'react'
import { CreateJobPage } from '../../../components/CreateJobPage'
import { Money } from '../../../components/Money'
import {
  JobsCreatePlanQuery,
  useJobsCreatePlanQuery,
} from '../../../graphql-codegen'
import { useAuthRequired } from '../../../lib/useAuthRequired'

interface FormData {
  name: string
  street: string
  unit?: string
  postalCode: string
  city: string
  province: string
}

const useClassNames = makeStyles((theme) => ({
  plan: {
    textAlign: 'center',
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: theme.spacing(1),
  },
  selectedPlan: {
    borderColor: theme.palette.primary.main,
    boxShadow: theme.shadows[1],
  },
}))

export default function JobsCreatePaymentPage() {
  useAuthRequired()
  const router = useRouter()
  const classNames = useClassNames()
  const [loading, setLoading] = useState(false)
  const [planId, setPlanId] = useState<string | null>(null)
  const jobId = useMemo(() => router.query.id, [router])
  const { data } = useJobsCreatePlanQuery({
    variables: { jobId },
  })

  useEffect(() => {
    if (typeof data?.job?.stripe_payment_intent_client_secret === 'string') {
      router.push(`/jobs/create/payment?id=${jobId}`)
    }
  }, [data, router, jobId])

  const handlePlanClick = useCallback(
    (plan: JobsCreatePlanQuery['plans'][0]) => () => {
      setPlanId(plan.id)
    },
    [setPlanId],
  )

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      if (!planId) return

      setLoading(true)

      const response = await fetch('/api/stripe/set-intent', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify({
          jobId,
          planId,
        }),
      })

      if (response.status !== 200) {
        // setError(error.message)
        setLoading(false)
        return
      }

      router.push(`/jobs/create/payment?id=${jobId}`)
    },
    [router, jobId, planId],
  )

  return (
    <CreateJobPage
      onSubmit={handleSubmit}
      activeStep={2}
      title='Payment'
      loading={loading}
      query={data}
    >
      <Grid container spacing={6}>
        {data?.plans.map((plan) => (
          <Grid item key={plan.id} xs={12} sm={12} md={4}>
            <Grid
              container
              spacing={1}
              direction='column'
              className={clsx(classNames.plan, {
                [classNames.selectedPlan]: planId === plan.id,
              })}
            >
              <Grid item>
                <Typography variant='h2'>{plan.name}</Typography>
              </Grid>
              <Grid item>
                <Typography>{`${plan.attempts} attempt${
                  plan.attempts > 1 ? 's' : ''
                } in ${plan.duration}`}</Typography>
              </Grid>
              <Grid item>
                <Typography variant='overline'>Fee</Typography>
                <Typography variant='h5'>
                  <Money cents={plan.fee} />
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='overline'>Bounty</Typography>
                <Typography variant='h5'>
                  <Money cents={plan.bounty} />
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handlePlanClick(plan)}
                  disabled={planId === plan.id}
                >
                  Select
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </CreateJobPage>
  )
}
