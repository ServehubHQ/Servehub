import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  Stepper,
  Step,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AddressForm } from '../../../components/AddressForm'
import ServerOnboardingPage from '../../../components/ServerOnboardingPage'
import {
  InsertAddressMutationVariables,
  useInsertAddressMutation,
  useLawyerOnboardingPageQuery,
  useSetUserAddressMutation,
} from '../../../graphql-codegen'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'
import { Page } from '../../../components/Page'
import { Stack } from '../../../components/Stack'
import { StepLabel } from '../../../components/StepLabel'

export default function LawyerOnboardingPage() {
  useAuthRequired()
  const { userId, authClient, role } = useAuth()
  const router = useRouter()
  const { data } = useLawyerOnboardingPageQuery()
  const [
    insertAddress,
    { loading: insertAddressLoading },
  ] = useInsertAddressMutation()
  const [
    setUserAddress,
    { loading: setUserAddressLoading },
  ] = useSetUserAddressMutation()
  const { register, handleSubmit, errors, setError } = useForm<
    InsertAddressMutationVariables
  >()

  const loading = useMemo(() => insertAddressLoading || setUserAddressLoading, [
    insertAddressLoading,
    setUserAddressLoading,
  ])

  useEffect(() => {
    if (data?.current_user[0]?.address_id) {
      router.push(`/jobs/create`)
    }
  }, [data, router, role])

  const handleFormValid = useCallback(
    async (formData: InsertAddressMutationVariables) => {
      const { data: addressData } = await insertAddress({ variables: formData })

      const addressId = addressData?.insert_addresses?.returning[0]?.id
      if (!addressId) {
        setError('name', 'An unknown error has accured')
        return
      }

      await setUserAddress({ variables: { addressId, userId } })

      await authClient?.refreshToken(true)
      router.push(`/jobs/create`)
    },
    [insertAddress, setUserAddress, router, setError, userId, authClient],
  )

  return (
    <Page query={data} title='Server Onboarding'>
      <Stack>
        <Paper>
          <Stepper activeStep={1}>
            <Step>
              <StepLabel>Signup</StepLabel>
            </Step>
            <Step>
              <StepLabel>Enter Address</StepLabel>
            </Step>
            <Step>
              <StepLabel>Create Job</StepLabel>
            </Step>
          </Stepper>
        </Paper>
        <form noValidate onSubmit={handleSubmit(handleFormValid)}>
          <Card>
            <CardHeader
              title='Enter your Address'
              subheader='This should be the address of your law firm.'
            />
            <Divider />
            <CardContent>
              <AddressForm register={register} errors={errors} />
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                disabled={loading}
              >
                Next
              </Button>
            </CardActions>
          </Card>
        </form>
      </Stack>
    </Page>
  )
}
