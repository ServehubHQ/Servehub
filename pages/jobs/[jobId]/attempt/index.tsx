import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Link as MuiLink,
} from '@material-ui/core'
import { DateTimePicker } from '@material-ui/pickers'
import { Moment } from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { Heading } from '../../../../components/Heading'
import { Page } from '../../../../components/Page'
import {
  useJobAttemptQuery,
  useInsertAttemptMutation,
} from '../../../../graphql-codegen'
import { useAuth } from '../../../../lib/useAuth'
import { useAuthRequired } from '../../../../lib/useAuthRequired'

interface FormData {
  attemptedAt: Date
  success: boolean
  imageUrl?: string
}

export default function JobDetailsPage() {
  useAuthRequired()
  const router = useRouter()
  const { jobId } = router.query
  const { userId } = useAuth()
  const { data } = useJobAttemptQuery({ variables: { jobId, userId } })
  const job = useMemo(() => data?.jobs_by_pk, [data])
  const [insertAttempt, { loading }] = useInsertAttemptMutation()
  const { register, handleSubmit, watch, setValue } = useForm<FormData>({
    defaultValues: { attemptedAt: new Date() },
  })
  const attemptedAt = watch('attemptedAt')

  useEffect(() => {
    register({ name: 'attemptedAt' })
  }, [register])

  const handleAttemptedAtChange = useCallback(
    (value: Moment | null) => {
      setValue('attemptedAt', value?.toDate())
    },
    [setValue],
  )

  const handleFormValid = useCallback(
    async (formData: FormData) => {
      if (!job) {
        throw new Error('missing job when inserting attempt')
      }
      await insertAttempt({ variables: { ...formData, jobId: job.id } })
      router.push(`/jobs/${job.id}`)
    },
    [job, insertAttempt, router],
  )

  return (
    <Page query={data} title={`Record Attempt - ${job?.target_name || 'Job'}`}>
      <Grid container direction='column' spacing={4}>
        <Grid item>
          <Heading
            title='Record Attempt'
            breadcrumbs={[
              <Link href='/jobs' passHref key='jobs'>
                <MuiLink color='inherit'>Jobs</MuiLink>
              </Link>,
              <Link href={`/jobs/${job?.id}`} passHref key='job'>
                <MuiLink color='inherit'>{job?.target_name}</MuiLink>
              </Link>,
            ]}
          />
        </Grid>
        <Grid item>
          <form noValidate onSubmit={handleSubmit(handleFormValid)}>
            <Card>
              <CardContent>
                <Grid container direction='column' spacing={1}>
                  <Grid item>
                    <FormControlLabel
                      control={
                        <Checkbox
                          inputRef={register}
                          name='success'
                          color='primary'
                        />
                      }
                      label='Successful'
                    />
                  </Grid>
                  <Grid item>
                    <DateTimePicker
                      label='Time'
                      variant='dialog'
                      value={attemptedAt}
                      onChange={handleAttemptedAtChange}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  disabled={loading}
                >
                  Submit
                </Button>
              </CardActions>
            </Card>
          </form>
        </Grid>
      </Grid>
    </Page>
  )
}
