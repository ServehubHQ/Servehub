import {
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { CreateJobSteps } from '../../../components/CreateJobSteps'
import { Page } from '../../../components/Page'
import { SelectField } from '../../../components/SelectField'
import {
  useInsertTargetMutation,
  useSetJobTargetMutation,
} from '../../../graphql.gen'

interface FormData {
  name: string
  street: string
  unit: string
  city: string
  province: string
}

// export default withData()(function JobsCreateTargetPage() {
export default function JobsCreateTargetPage() {
  const router = useRouter()
  const [insertTarget] = useInsertTargetMutation()
  const [setJobTarget] = useSetJobTargetMutation()

  const { register, handleSubmit, errors, control, setError } = useForm<
    FormData
  >()

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

          <CreateJobSteps activeStep={1} />

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
                    autoFocus
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
                    required
                    label='Unit'
                    name='unit'
                    autoFocus
                    fullWidth
                    inputRef={register({ required: true })}
                    error={Boolean(errors.unit)}
                    helperText={errors.unit?.message}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                  <TextField
                    variant='filled'
                    margin='normal'
                    required
                    label='City'
                    name='city'
                    autoFocus
                    fullWidth
                    inputRef={register({ required: true })}
                    error={Boolean(errors.city)}
                    helperText={errors.city?.message}
                  />
                </Grid>

                <Grid item sm={4} xs={12}>
                  <SelectField
                    label='Province'
                    name='province'
                    control={control}
                    rules={{ required: true }}
                    fullWidth
                    required
                  >
                    <MenuItem value='NL'>Newfoundland and Labrador</MenuItem>
                    <MenuItem value='PE'>Prince Edward Island</MenuItem>
                    <MenuItem value='NS'>Nova Scotia</MenuItem>
                    <MenuItem value='NB'>New Brunswick</MenuItem>
                    <MenuItem value='QC'>Quebec</MenuItem>
                    <MenuItem value='ON'>Ontario</MenuItem>
                    <MenuItem value='MB'>Manitoba</MenuItem>
                    <MenuItem value='SK'>Saskatchewan</MenuItem>
                    <MenuItem value='AB'>Alberta</MenuItem>
                    <MenuItem value='BC'>British Columbia</MenuItem>
                    <MenuItem value='YT'>Yukon</MenuItem>
                    <MenuItem value='NT'>Northwest Territories</MenuItem>
                    <MenuItem value='NU'>Nunavut</MenuItem>
                  </SelectField>
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
