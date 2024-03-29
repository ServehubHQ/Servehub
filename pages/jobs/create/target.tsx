import {
  TextField,
  Grid,
  CardContent,
  CardHeader,
  Divider,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { AddressForm } from '../../../components/AddressForm'
import { CreateJobPage } from '../../../components/CreateJobPage'
import {
  useInsertAddressMutation,
  useSetJobTargetMutation,
  InsertAddressMutationVariables,
  useJobsCreateTargetPageQuery,
} from '../../../graphql-codegen'
import { useAuthRequired } from '../../../lib/useAuthRequired'

interface FormData extends InsertAddressMutationVariables {
  name: string
  caseNumber: string
}

export default function JobsCreateTargetPage() {
  useAuthRequired()
  const router = useRouter()
  const { data } = useJobsCreateTargetPageQuery()
  const [
    insertAddress,
    { loading: insertAddressLoading },
  ] = useInsertAddressMutation()
  const [
    setJobTarget,
    { loading: setJobTargetLoading },
  ] = useSetJobTargetMutation()

  const loading = useMemo(() => insertAddressLoading || setJobTargetLoading, [
    insertAddressLoading,
    setJobTargetLoading,
  ])

  const { register, handleSubmit, errors, setError, watch } = useForm<
    FormData
  >()

  const handleFormValid = useCallback(
    async ({ name: targetName, caseNumber, ...targetAddress }: FormData) => {
      const { data: addressData } = await insertAddress({
        variables: targetAddress,
      })

      const addressId = addressData?.insert_addresses?.returning?.[0]?.id
      if (!addressId) {
        setError('name', 'An unknown error has accured')
        return
      }

      await setJobTarget({
        variables: {
          jobId: router.query.id,
          targetName,
          caseNumber,
          addressId,
        },
      })

      router.push(`/jobs/create/documents?id=${router.query.id}`)
    },
    [insertAddress, router, setError, setJobTarget],
  )

  return (
    <CreateJobPage
      onSubmit={handleSubmit(handleFormValid)}
      activeStep={0}
      title='Target'
      loading={loading}
      query={data}
    >
      <CardHeader
        title='Target Information'
        subheader='This is the person who will be served.'
      />
      <Divider />
      <CardContent>
        <Grid container direction='row' spacing={2}>
          <Grid item xs={6}>
            <TextField
              variant='filled'
              margin='normal'
              label='Full Name'
              name='name'
              required
              autoFocus
              fullWidth
              inputRef={register({ required: true })}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant='filled'
              margin='normal'
              label='Case Number'
              name='caseNumber'
              fullWidth
              inputRef={register()}
              error={Boolean(errors.caseNumber)}
              helperText={errors.caseNumber?.message}
            />
          </Grid>
        </Grid>
        <AddressForm register={register} errors={errors} watch={watch} />
      </CardContent>
    </CreateJobPage>
  )
}
