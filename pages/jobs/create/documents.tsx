import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  makeStyles,
  Paper,
  Select,
  Switch,
  TextField,
  Typography,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form'
import { CreateJobSteps } from '../../../components/CreateJobSteps'
import { Page } from '../../../components/Page'
import { useInsertDocumentMutation } from '../../../graphql-codegen'

export const useStyles = makeStyles((theme) => ({
  dropzone: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(2),
  },
}))

interface FormData {
  pickup: boolean
  title: string
  street?: string
  unit?: string
  postalCode?: string
  city?: string
  province?: string
}

export default function JobsCreateDocumentsPage() {
  const styles = useStyles()
  const router = useRouter()
  const [insertDocument] = useInsertDocumentMutation()
  const { register, handleSubmit, errors, watch } = useForm<FormData>()
  const pickup = watch('pickup')

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: useCallback((uploadedFiles) => {
      // TODO: handle uploaded files
      console.log('uploadedFiles', uploadedFiles)
    }, []),
  })

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
              <TextField
                variant='filled'
                margin='normal'
                required
                label='Title'
                name='title'
                autoFocus
                inputRef={register({ required: true })}
                error={Boolean(errors.title)}
                helperText={errors.title?.message}
              />

              <FormControlLabel
                control={
                  <Switch inputRef={register} name='pickup' color='primary' />
                }
                label='Require Pickup'
              />

              {pickup ? (
                <>
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
                </>
              ) : (
                <Paper
                  {...getRootProps()}
                  variant='outlined'
                  className={styles.dropzone}
                >
                  <Box p={5} alignItems='center'>
                    <input {...getInputProps()} />
                    <Typography align='center'>
                      Drop files or click here to upload.
                    </Typography>
                  </Box>
                </Paper>
              )}

              <Box mt={2} display='flex' justifyContent='flex-end'>
                <Button type='submit' variant='contained' color='primary'>
                  Add Document
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Paper>
    </Page>
  )
}
