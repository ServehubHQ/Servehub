import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { CreateJobSteps } from '../../../components/CreateJobSteps'
import { Page } from '../../../components/Page'
import {
  useInsertTargetMutation,
  useSetJobTargetMutation,
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

// export default withData()(function JobsCreateTargetPage() {
export default function JobsCreateTargetPage() {
  useAuthRequired()
  const router = useRouter()
  const [insertTarget] = useInsertTargetMutation()
  const [setJobTarget] = useSetJobTargetMutation()

  const { register, handleSubmit, errors, setError } = useForm<FormData>()

  const handleFormValid = useCallback(
    async (formData: FormData) => {
      const { data: targetData } = await insertTarget({ variables: formData })

      const targetId = targetData?.insert_targets?.returning[0]?.id
      if (!targetId) {
        setError('name', 'An unknown error has accured')
        return
      }

      await setJobTarget({
        variables: {
          id: router.query.id,
          targetId,
        },
      })

      router.push(`/jobs/create/documents?id=${router.query.id}`)
    },
    [insertTarget, router, setError, setJobTarget],
  )

  return (
    <Page>
      <Paper>
        <Box p={2}>
          <Typography component='h1' variant='h5'>
            Create Job
          </Typography>

          <CreateJobSteps activeStep={0} />

          <form noValidate onSubmit={handleSubmit(handleFormValid)}>
            <Box display='flex' flexDirection='column'>
              <TextField
                variant='filled'
                margin='normal'
                required
                label='Full Name'
                name='name'
                autoFocus
                inputRef={register({ required: true })}
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
              />

              <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                  <TextField
                    variant='filled'
                    margin='normal'
                    required
                    label='Street Address'
                    name='street'
                    fullWidth
                    inputRef={register({ required: true })}
                    error={Boolean(errors.street)}
                    helperText={errors.street?.message}
                  />
                </Grid>

                <Grid item sm={4} xs={12}>
                  <TextField
                    variant='filled'
                    margin='normal'
                    label='Unit'
                    name='unit'
                    fullWidth
                    inputRef={register()}
                    error={Boolean(errors.unit)}
                    helperText={errors.unit?.message}
                  />
                </Grid>
              </Grid>

              <TextField
                variant='filled'
                margin='normal'
                required
                label='Postal Code'
                name='postalCode'
                fullWidth
                inputRef={register({ required: true })}
                error={Boolean(errors.postalCode)}
                helperText={errors.postalCode?.message}
              />

              <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                  <TextField
                    variant='filled'
                    margin='normal'
                    required
                    label='City'
                    name='city'
                    fullWidth
                    inputRef={register({ required: true })}
                    error={Boolean(errors.city)}
                    helperText={errors.city?.message}
                  />
                </Grid>

                <Grid item sm={4} xs={12}>
                  <FormControl variant='filled' margin='normal' fullWidth>
                    <InputLabel htmlFor='province'>Province</InputLabel>
                    <Select
                      native
                      name='province'
                      id='province'
                      inputRef={register({ required: true })}
                      required
                      defaultValue='ON'
                    >
                      <option value='NL'>Newfoundland and Labrador</option>
                      <option value='PE'>Prince Edward Island</option>
                      <option value='NS'>Nova Scotia</option>
                      <option value='NB'>New Brunswick</option>
                      <option value='QC'>Quebec</option>
                      <option value='ON'>Ontario</option>
                      <option value='MB'>Manitoba</option>
                      <option value='SK'>Saskatchewan</option>
                      <option value='AB'>Alberta</option>
                      <option value='BC'>British Columbia</option>
                      <option value='YT'>Yukon</option>
                      <option value='NT'>Northwest Territories</option>
                      <option value='NU'>Nunavut</option>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Box mt={2} display='flex' justifyContent='flex-end'>
                <Button type='submit' variant='contained' color='primary'>
                  Next
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Paper>
    </Page>
  )
}
