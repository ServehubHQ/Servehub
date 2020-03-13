import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  makeStyles,
  Paper,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@material-ui/core'
import { Delete, Description } from '@material-ui/icons'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form'
import { CreateJobSteps } from '../../../components/CreateJobSteps'
import { Page } from '../../../components/Page'
import {
  useDeleteDocumentMutation,
  useInsertDocumentMutation,
  useJobsCreateDocumentsQuery,
} from '../../../graphql-codegen'
import { uploadFile } from '../../../lib/uploadFile'
import { useAuthRequired } from '../../../lib/useAuthRequired'
import Link from 'next/link'

export const useStyles = makeStyles((theme) => ({
  dropzone: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(2),
  },
}))

interface FormData {
  pickup: boolean
  title: string
  url?: string
  street?: string
  unit?: string
  postalCode?: string
  city?: string
  province?: string
}

export default function JobsCreateDocumentsPage() {
  useAuthRequired()
  const styles = useStyles()
  const router = useRouter()
  const jobId = useMemo(() => router.query.id, [router])
  const { data, refetch } = useJobsCreateDocumentsQuery({
    variables: { jobId },
  })
  const [insertDocument] = useInsertDocumentMutation()
  const [deleteDocument] = useDeleteDocumentMutation()
  const {
    register,
    handleSubmit,
    errors,
    watch,
    getValues,
    setValue,
  } = useForm<FormData>()
  const { pickup, url: documentUrl } = watch(['pickup', 'url'])

  useEffect(() => {
    register({ name: 'url' })
  }, [register])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: useCallback(
      async (uploadedFiles) => {
        const url = await uploadFile(
          uploadedFiles[0],
          `/documents/${jobId}`,
          getValues()['title'],
        )
        console.log(url)
        setValue('url', url)
      },
      [jobId, getValues, setValue],
    ),
  })

  const handleDeleteDocumentClick = useCallback(
    (id: string) => async () => {
      await deleteDocument({ variables: { id } })
      await refetch()
    },
    [deleteDocument, refetch],
  )

  const handleFormValid = useCallback(
    async (formData: FormData) => {
      console.log('handleFormValid', { ...formData, jobId })
      await insertDocument({
        variables: { ...formData, jobId },
      })
      await refetch()
    },
    [insertDocument, refetch, jobId],
  )

  const handleNextClick = useCallback(() => {
    console.log('push route', router.pathname)
  }, [router])

  return (
    <Page>
      <Paper>
        <Box p={2}>
          <Typography variant='h5'>Create Job</Typography>

          <CreateJobSteps activeStep={1} />

          {(data?.documents.length || 0) > 0 ? (
            <Box mb={2}>
              <TableContainer>
                <Table aria-label='documents'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell align='right'>Location</TableCell>
                      <TableCell align='right'>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.documents.map((document) => (
                      <TableRow key={document.id}>
                        <TableCell component='th' scope='row'>
                          {document.title}
                        </TableCell>
                        <TableCell align='right'>
                          {document.url ? (
                            <Link href={document.url} passHref>
                              <IconButton
                                {...({
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                } as any)}
                              >
                                <Description fontSize='small' />
                              </IconButton>
                            </Link>
                          ) : (
                            document.street
                          )}
                        </TableCell>
                        <TableCell align='right'>
                          <IconButton
                            onClick={handleDeleteDocumentClick(document.id)}
                          >
                            <Delete fontSize='small' />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          ) : null}

          <Typography variant='h6'>Add Document</Typography>
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
                        label='Unit'
                        name='unit'
                        autoFocus
                        fullWidth
                        inputRef={register()}
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
                      <FormControl
                        variant='filled'
                        margin='normal'
                        fullWidth
                        required
                      >
                        <InputLabel htmlFor='province'>Province</InputLabel>
                        <Select
                          native
                          name='province'
                          id='province'
                          inputRef={register({ required: true })}
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
                    {documentUrl ? (
                      <Typography align='center'>
                        {'Doument uploaded! '}
                        <a
                          href={documentUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Preview here,
                        </a>
                        {' or upload another to replace.'}
                      </Typography>
                    ) : (
                      <Typography align='center'>
                        Drop or click to upload files
                      </Typography>
                    )}
                  </Box>
                </Paper>
              )}

              <Box mt={2}>
                <Grid container spacing={2} justify='flex-end' direction='row'>
                  <Grid item>
                    <Button type='submit' variant='contained' color='primary'>
                      Add Document
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button onClick={handleNextClick}>Next</Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </form>
        </Box>
      </Paper>
    </Page>
  )
}
