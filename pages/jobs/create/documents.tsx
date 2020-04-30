import {
  FormControlLabel,
  Grid,
  Switch,
  CardContent,
  Divider,
  CardHeader,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AddressForm } from '../../../components/AddressForm'
import { CreateJobPage } from '../../../components/CreateJobPage'
import { DroppedFile, FilesDropzone } from '../../../components/FileDropzone'
import {
  InsertAddressMutationVariables,
  useInsertAddressMutation,
  useSetJobPickupRequiredMutation,
  useInsertDocumentMutation,
  useJobsCreateDocumentsQuery,
} from '../../../graphql-codegen'
import { useAuthRequired } from '../../../lib/useAuthRequired'
import { undefinedIfNull } from '../../../components/undefinedIfNull'

export default function JobsCreateDocumentsPage() {
  useAuthRequired()
  const router = useRouter()
  const jobId = useMemo(() => router.query.id, [router])
  const { data } = useJobsCreateDocumentsQuery({ variables: { jobId } })
  const [pickup, setPickup] = useState(false)
  const [files, setFiles] = useState<DroppedFile[]>([])
  const [
    insertAddress,
    { loading: insertAddressLoading },
  ] = useInsertAddressMutation()
  const [
    insertDocument,
    { loading: insertDocumentLoading },
  ] = useInsertDocumentMutation()
  const [
    setPickupRequired,
    { loading: setPickupRequiredLoading },
  ] = useSetJobPickupRequiredMutation()
  const loading = useMemo(
    () =>
      insertAddressLoading || setPickupRequiredLoading || insertDocumentLoading,
    [insertAddressLoading, setPickupRequiredLoading, insertDocumentLoading],
  )
  const { register, handleSubmit, errors, setError } = useForm<
    InsertAddressMutationVariables
  >({
    defaultValues: undefinedIfNull(data?.current_user[0]?.address),
  })

  const handlePickupChange = useCallback(
    (event, pickup: boolean) => {
      setPickup(pickup)
    },
    [setPickup],
  )

  const handleFormValid = useCallback(
    async (formData: InsertAddressMutationVariables) => {
      if (pickup) {
        const { data: addressData } = await insertAddress({
          variables: formData,
        })

        const addressId = addressData?.insert_addresses?.returning[0]?.id
        if (!addressId) {
          setError('street', 'An unknown error has accured')
          return
        }
        await setPickupRequired({
          variables: { jobId, addressId },
        })
      } else {
        await Promise.all(
          files.map((file) =>
            insertDocument({
              variables: { jobId, title: file.name, url: file.url! },
            }),
          ),
        )
      }
      router.push(`/jobs/create/plan?id=${jobId}`)
    },
    [
      router,
      jobId,
      pickup,
      setPickupRequired,
      files,
      insertAddress,
      insertDocument,
      setError,
    ],
  )

  return (
    <CreateJobPage
      activeStep={1}
      onSubmit={handleSubmit(handleFormValid)}
      title='Documents'
      loading={loading}
      query={data}
    >
      <CardHeader
        title='Documents'
        subheader='You can have the server pick them up, or print the documents themselves.'
      />
      <Divider />
      <CardContent>
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
                filePath={`/jobs/${jobId}/documents`}
                onChange={setFiles}
              />
            )}
          </Grid>
        </Grid>
      </CardContent>
    </CreateJobPage>
  )
}
