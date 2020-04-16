import { FormControlLabel, Grid, Switch } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AddressForm } from '../../../components/AddressForm'
import { CreateJobPage } from '../../../components/CreateJobPage'
import { DroppedFile, FilesDropzone } from '../../../components/FileDropzone'
import {
  useInsertDocumentMutation,
  useSetJobPickupRequiredMutation,
} from '../../../graphql-codegen'
import { useAuthRequired } from '../../../lib/useAuthRequired'

interface FormData {
  street: string
  unit?: string
  postalCode: string
  city: string
  province: string
}

export default function JobsCreateDocumentsPage() {
  useAuthRequired()
  const router = useRouter()
  const jobId = useMemo(() => router.query.id, [router])
  const [pickup, setPickup] = useState(false)
  const [files, setFiles] = useState<DroppedFile[]>([])
  const [
    insertDocument,
    { loading: insertDocumentLoading },
  ] = useInsertDocumentMutation()
  const [
    setPickupRequired,
    { loading: setPickupRequiredLoading },
  ] = useSetJobPickupRequiredMutation()
  const loading = useMemo(
    () => insertDocumentLoading || setPickupRequiredLoading,
    [insertDocumentLoading, setPickupRequiredLoading],
  )
  const { register, handleSubmit, errors } = useForm<FormData>()

  const handlePickupChange = useCallback(
    (event, pickup: boolean) => {
      setPickup(pickup)
    },
    [setPickup],
  )

  const handleFormValid = useCallback(
    async (formData: FormData) => {
      if (pickup) {
        await setPickupRequired({
          variables: { ...formData, jobId },
        })
      } else {
        await Promise.all(
          files.map((file) =>
            insertDocument({
              variables: { jobId, title: file.name, url: file.url },
            }),
          ),
        )
      }
      router.push(`/jobs/create/payment?id=${jobId}`)
    },
    [router, jobId, pickup, setPickupRequired, files, insertDocument],
  )

  return (
    <CreateJobPage
      activeStep={2}
      onSubmit={handleSubmit(handleFormValid)}
      title='Documents'
      loading={loading}
    >
      <Grid container spacing={2} direction='column'>
        <Grid item>
          <FormControlLabel
            control={
              <Switch
                name='pickup'
                color='primary'
                onChange={handlePickupChange}
              />
            }
            label='Require Pickup'
          />
        </Grid>

        <Grid item>
          {pickup ? (
            <AddressForm register={register} errors={errors} />
          ) : (
            <FilesDropzone
              filePath={`/documents/${jobId}`}
              onChange={setFiles}
            />
          )}
        </Grid>
      </Grid>
    </CreateJobPage>
  )
}
