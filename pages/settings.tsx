import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControlLabel,
  Switch,
  Typography,
} from '@material-ui/core'
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
  MouseEvent,
} from 'react'
import { useForm } from 'react-hook-form'
import { AddressForm } from '../components/AddressForm'
import { Heading } from '../components/Heading'
import { Page } from '../components/Page'
import { Stack } from '../components/Stack'
import {
  InsertAddressMutationVariables,
  useInsertAddressMutation,
  useSettingsPageQuery,
  useSetUserAddressMutation,
} from '../graphql-codegen'
import {
  getAndSaveMessagingToken,
  pushNotificationsSupported,
} from '../lib/firebase'
import { useAuth } from '../lib/useAuth'
import { useAuthRequired } from '../lib/useAuthRequired'

export default function SettingsPage() {
  useAuthRequired()
  const { userId } = useAuth()
  const { data, refetch } = useSettingsPageQuery()

  // Address

  const [
    insertAddress,
    { loading: insertAddressLoading },
  ] = useInsertAddressMutation()
  const [
    setUserAddress,
    { loading: setUserAddressLoading },
  ] = useSetUserAddressMutation()
  const { register, handleSubmit, errors, setError, setValue, watch } = useForm<
    InsertAddressMutationVariables
  >()

  const addressLoading = useMemo(
    () => insertAddressLoading || setUserAddressLoading,
    [insertAddressLoading, setUserAddressLoading],
  )

  useEffect(() => {
    if (data?.current_user[0].address) {
      for (const [key, value] of Object.entries(
        data?.current_user[0].address,
      )) {
        setValue(key, value)
      }
    }
  }, [data, setValue])

  const handleFormValid = useCallback(
    async (formData: InsertAddressMutationVariables) => {
      const { data: addressData } = await insertAddress({ variables: formData })

      const addressId = addressData?.insert_addresses?.returning[0]?.id
      if (!addressId) {
        setError('name', 'An unknown error has accured')
        return
      }

      await setUserAddress({ variables: { addressId, userId } })
    },
    [insertAddress, setUserAddress, setError, userId],
  )

  // Push

  const supportsPush = useMemo(() => pushNotificationsSupported(), [])
  const [
    optimisticNotificationsEnabled,
    setOptimisticNotificationsEnabled,
  ] = useState<boolean | null>(null)
  const [notificationsLoading, setNotificationsLoading] = useState(false)
  const notificationsEnabled = useMemo(
    () =>
      typeof optimisticNotificationsEnabled === 'boolean'
        ? optimisticNotificationsEnabled
        : Boolean(
            data?.current_user &&
              data?.current_user[0] &&
              data?.current_user[0].firebase_messaging_token &&
              data?.current_user[0].notifications_enabled,
          ),
    [data, optimisticNotificationsEnabled],
  )

  const handleNotificationsSwitch = useCallback(
    async (event: ChangeEvent<HTMLInputElement>, value: boolean) => {
      setOptimisticNotificationsEnabled(value)
    },
    [setOptimisticNotificationsEnabled],
  )

  const handleNotificationsSave = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      if (optimisticNotificationsEnabled !== null) {
        setNotificationsLoading(true)
        await getAndSaveMessagingToken(optimisticNotificationsEnabled)
        await refetch()
        setOptimisticNotificationsEnabled(null)
        setNotificationsLoading(false)
      }
    },
    [
      refetch,
      setOptimisticNotificationsEnabled,
      optimisticNotificationsEnabled,
    ],
  )

  return (
    <Page query={data} title='Server Onboarding'>
      <Stack>
        <Heading title='Settings' />
        <form noValidate onSubmit={handleSubmit(handleFormValid)}>
          <Card>
            <CardHeader title='Address' />
            <Divider />
            <CardContent>
              <AddressForm register={register} errors={errors} watch={watch} />
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                disabled={addressLoading}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </form>
        <Card>
          <CardHeader title='Push Notifications' />
          <Divider />
          <CardContent>
            {supportsPush ? (
              <FormControlLabel
                control={
                  <Switch
                    checked={notificationsEnabled}
                    onChange={handleNotificationsSwitch}
                    name='Notifications'
                  />
                }
                label='Enable Push Notifications'
              />
            ) : (
              <Typography>
                Unforunately, your browser does not support push notifications.
              </Typography>
            )}
            {/* await getAndSaveMessagingToken(true) */}
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              variant='contained'
              color='primary'
              disabled={notificationsLoading || !supportsPush}
              onClick={handleNotificationsSave}
            >
              Save
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Page>
  )
}
