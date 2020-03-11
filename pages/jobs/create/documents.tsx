import {
  Box,
  Button,
  Paper,
  Typography,
  TextField,
  FormControlLabel,
  Switch,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { CreateJobSteps } from '../../../components/CreateJobSteps'
import { Page } from '../../../components/Page'
import { useInsertDocumentMutation } from '../../../graphql.gen'

interface FormData {
  pickup: boolean
  city: string
  postalCode: string
  province: string
  street: string
  unit: string
}

export default function JobsCreateDocumentsPage() {
  const router = useRouter()
  const [insertDocument] = useInsertDocumentMutation()
  const { register, handleSubmit, errors, watch } = useForm<FormData>()
  const pickup = watch('pickup')

  const handleFormValid = useCallback(
    async (formData: FormData) => {
      await insertDocument({
        variables: { ...formData, jobId: router.query.id },
      })
    },
    [insertDocument, router],
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
              <FormControlLabel
                control={
                  <Switch inputRef={register} name='pickup' color='primary' />
                }
                label='Require Pickup'
              />
              {pickup ? (
                <TextField
                  variant='filled'
                  margin='normal'
                  required
                  label='Street'
                  name='street'
                  autoFocus
                  inputRef={register({ required: true })}
                  error={Boolean(errors.street)}
                  helperText={errors.street?.message}
                />
              ) : null}

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
