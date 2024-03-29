import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  makeStyles,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import { useCallback, useMemo, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AddressForm } from '../../../components/AddressForm'
import ServerOnboardingPage from '../../../components/ServerOnboardingPage'
import {
  InsertAddressMutationVariables,
  useInsertAddressMutation,
  useOnboardingPageQuery,
  useSetUserAddressMutation,
} from '../../../graphql-codegen'
import { useAuth } from '../../../lib/useAuth'
import { useAuthRequired } from '../../../lib/useAuthRequired'
import { pushNotificationsSupported } from '../../../lib/firebase'

const useClassNames = makeStyles((theme) => ({
  actions: {
    justifyContent: 'flex-end',
  },
}))

export default function OnboardingPage() {
  useAuthRequired()
  const classNames = useClassNames()
  const { userId, authClient, role } = useAuth()
  const router = useRouter()
  const { data } = useOnboardingPageQuery({ variables: { userId } })
  const [
    insertAddress,
    { loading: insertAddressLoading },
  ] = useInsertAddressMutation()
  const [
    setUserAddress,
    { loading: setUserAddressLoading },
  ] = useSetUserAddressMutation()
  const { register, handleSubmit, errors, setError, watch } = useForm<
    InsertAddressMutationVariables
  >()

  const loading = useMemo(() => insertAddressLoading || setUserAddressLoading, [
    insertAddressLoading,
    setUserAddressLoading,
  ])

  useEffect(() => {
    if (data?.current_user[0]?.address_id) {
      router.push(`/onboarding/${role}/notifications`)
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
      const role = authClient?.getRole()

      if (pushNotificationsSupported()) {
        router.push(`/onboarding/${role}/notifications`)
      } else {
        router.push(`/onboarding/${role}/pending-approval`)
      }
    },
    [insertAddress, setUserAddress, router, setError, userId, authClient],
  )

  return (
    <ServerOnboardingPage query={data} step='address'>
      <form noValidate onSubmit={handleSubmit(handleFormValid)}>
        <Card>
          <CardHeader
            title='Enter your Address'
            subheader='Your address will be used to find jobs in your area.'
          />
          <Divider />
          <CardContent>
            <AddressForm register={register} errors={errors} watch={watch} />
          </CardContent>
          <Divider />
          <CardActions className={classNames.actions}>
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
    </ServerOnboardingPage>
  )
}
