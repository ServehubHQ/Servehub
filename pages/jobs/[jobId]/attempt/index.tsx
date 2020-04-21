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
  TextField,
} from '@material-ui/core'
import { DateTimePicker } from '@material-ui/pickers'
import { Moment } from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Heading } from '../../../../components/Heading'
import { Page } from '../../../../components/Page'
import {
  useJobAttemptQuery,
  useInsertAttemptMutation,
} from '../../../../graphql-codegen'
import { useAuth } from '../../../../lib/useAuth'
import { useAuthRequired } from '../../../../lib/useAuthRequired'
import { FilesDropzone, DroppedFile } from '../../../../components/FileDropzone'

interface FormData {
  attemptedAt: Date
  success: boolean
  notes: string
  imageUrl?: string
}

export default function JobDetailsPage() {
  useAuthRequired()
  const router = useRouter()
  const { jobId } = router.query
  const { userId } = useAuth()
  const [files, setFiles] = useState<DroppedFile[]>([])
  const { data } = useJobAttemptQuery({ variables: { jobId, userId } })
  const job = useMemo(() => data?.jobs_by_pk, [data])
  const [insertAttempt, { loading }] = useInsertAttemptMutation()
  const { register, handleSubmit, watch, setValue, errors } = useForm<FormData>(
    {
      defaultValues: { attemptedAt: new Date() },
    },
  )
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
      await insertAttempt({
        variables: {
          ...formData,
          imageUrl: files.length > 0 ? files[0].url : null,
          jobId: job.id,
        },
      })
      router.push(`/jobs/${job.id}`)
    },
    [job, insertAttempt, router, files],
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
                <Grid container direction='column' spacing={2}>
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
                  <Grid item>
                    <FilesDropzone
                      filePath={`/jobs/${jobId}/attempts`}
                      onChange={setFiles}
                      multiFile={false}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      variant='filled'
                      margin='normal'
                      label='Notes'
                      name='notes'
                      fullWidth
                      multiline
                      inputRef={register()}
                      error={Boolean(errors.notes)}
                      helperText={errors.notes?.message}
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
