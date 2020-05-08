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
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useForm } from 'react-hook-form'
import { AddressForm } from '../components/AddressForm'
import { Heading } from '../components/Heading'
import { Page } from '../components/Page'
import { Stack } from '../components/Stack'
import {
  InsertAddressMutationVariables,
  useInsertAddressMutation,
  useSetEmailNotificationsEnabledMutation,
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

  // Push Notifications

  const supportsPush = useMemo(() => pushNotificationsSupported(), [])
  const [optimisticPushEnabled, setOptimisticPushEnabled] = useState<
    boolean | null
  >(null)
  const [notificationsLoading, setNotificationsLoading] = useState(false)
  const pushEnabled = useMemo(
    () =>
      typeof optimisticPushEnabled === 'boolean'
        ? optimisticPushEnabled
        : Boolean(
            data?.current_user &&
              data?.current_user[0] &&
              data?.current_user[0].firebase_messaging_token &&
              data?.current_user[0].notifications_enabled,
          ),
    [data, optimisticPushEnabled],
  )

  const handlePushSwitch = useCallback(
    async (event: ChangeEvent<HTMLInputElement>, value: boolean) => {
      setOptimisticPushEnabled(value)
    },
    [setOptimisticPushEnabled],
  )

  const [
    setEmailNotificationsEnabled,
  ] = useSetEmailNotificationsEnabledMutation()
  const [optimisticEmailEnabled, setOptimisticEmailEnabled] = useState<
    boolean | null
  >(null)
  const emailEnabled = useMemo(
    () =>
      typeof optimisticEmailEnabled === 'boolean'
        ? optimisticEmailEnabled
        : Boolean(
            data?.current_user &&
              data?.current_user[0] &&
              data?.current_user[0].email_notifications_enabled,
          ),
    [data, optimisticEmailEnabled],
  )

  const handleEmailSwitch = useCallback(
    async (event: ChangeEvent<HTMLInputElement>, value: boolean) => {
      setOptimisticEmailEnabled(value)
    },
    [setOptimisticEmailEnabled],
  )

  const handleNotificationsSave = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      setNotificationsLoading(true)

      if (optimisticEmailEnabled !== null) {
        await setEmailNotificationsEnabled({
          variables: { userId, enabled: optimisticEmailEnabled },
        })
      }

      if (optimisticPushEnabled !== null) {
        await getAndSaveMessagingToken(optimisticPushEnabled)
      }

      await refetch()
      setOptimisticEmailEnabled(null)
      setOptimisticPushEnabled(null)
      setNotificationsLoading(false)
    },
    [
      refetch,
      userId,
      setNotificationsLoading,
      setOptimisticPushEnabled,
      optimisticPushEnabled,
      setEmailNotificationsEnabled,
      optimisticEmailEnabled,
      setOptimisticEmailEnabled,
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
          <CardHeader title='Notifications' />
          <Divider />
          <CardContent>
            <Stack>
              {supportsPush ? (
                <FormControlLabel
                  control={
                    <Switch
                      checked={pushEnabled}
                      onChange={handlePushSwitch}
                      name='push_notifications'
                    />
                  }
                  label='Push Notifications'
                />
              ) : (
                <Typography>
                  Unforunately, your browser does not support push
                  notifications.
                </Typography>
              )}

              <FormControlLabel
                control={
                  <Switch
                    checked={emailEnabled}
                    onChange={handleEmailSwitch}
                    name='email_notifications'
                  />
                }
                label='Email Notifications'
              />
            </Stack>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              variant='contained'
              color='primary'
              disabled={notificationsLoading}
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
