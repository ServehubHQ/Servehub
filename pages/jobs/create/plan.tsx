import {
  Button,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import {
  DirectionsCarTwoTone,
  DirectionsRunTwoTone,
  DirectionsWalkTwoTone,
} from '@material-ui/icons'
import clsx from 'clsx'
import fetch from 'cross-fetch'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { CreateJobPage } from '../../../components/CreateJobPage'
import { Money } from '../../../components/Money'
import { Stack } from '../../../components/Stack'
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
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.spacing(1),
  },
  selectedPlan: {
    boxShadow: theme.shadows[1],
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
  },
  planIcon: {
    fontSize: 64,
  },
  money: {
    color: theme.palette.secondary.main,
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
      <CardHeader
        title='Select a Plan'
        subheader='The bounty portion of the price will be refunded if the serve is unsuccessful.'
      />
      <Divider />
      <CardContent>
        <Grid container spacing={6}>
          {data?.plans.map((plan) => (
            <Grid item key={plan.id} xs={12} sm={12} md={4}>
              <Stack
                spacing={2}
                className={clsx(classNames.plan, {
                  [classNames.selectedPlan]: planId === plan.id,
                })}
              >
                {plan.order === 1 ? (
                  <DirectionsWalkTwoTone
                    className={classNames.planIcon}
                    color='primary'
                  />
                ) : plan.order === 2 ? (
                  <DirectionsRunTwoTone
                    className={classNames.planIcon}
                    color='primary'
                  />
                ) : (
                  <DirectionsCarTwoTone
                    className={classNames.planIcon}
                    color='primary'
                  />
                )}

                <Stack spacing={0}>
                  <Typography variant='h2'>{plan.name}</Typography>

                  <Typography>{`${plan.attempts} attempt${
                    plan.attempts > 1 ? 's' : ''
                  } in ${plan.duration}`}</Typography>
                </Stack>

                <Stack spacing={0}>
                  <Typography variant='h1' component='div'>
                    <Money
                      cents={plan.fee + plan.bounty}
                      className={classNames.money}
                    />
                  </Typography>

                  <Grid container direction='row' justify='space-around'>
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
                  </Grid>
                </Stack>

                <Divider />
                <Button
                  color='primary'
                  onClick={handlePlanClick(plan)}
                  disabled={planId === plan.id}
                >
                  Select
                </Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </CreateJobPage>
  )
}
