import firebase from 'firebase/app'
import 'firebase/messaging'
import { getApolloClient } from './getApolloClient'
import { getAuthClient } from './getAuthClient'
import {
  SetFirebaseMessagingTokenMutation,
  SetFirebaseMessagingTokenMutationVariables,
  SetFirebaseMessagingTokenDocument,
} from '../graphql-codegen'
import { config } from './config'

export function pushNotificationsSupported() {
  return typeof window !== 'undefined' && firebase?.messaging?.isSupported()
}

export async function initFirebase() {
  if (firebase.apps.length !== 0) {
    console.info('[firebase init] skipping')
    return
  }

  firebase.initializeApp(config.firebaseInitialization)
  const messaging = firebase.messaging()
  messaging.usePublicVapidKey(config.firebaseMessagingPublicKey)

  if (navigator?.serviceWorker) {
    const serviceWorker = await navigator.serviceWorker.ready
    messaging.useServiceWorker(serviceWorker)
  }
  console.info('[firebase init] complete')
}

export async function getAndSaveMessagingToken(notificationsEnabled = true) {
  if (!pushNotificationsSupported()) {
    return
  }
  const auth = getAuthClient()
  const userId = auth.getUserId()
  if (!userId) return

  const messaging = firebase.messaging()
  const token = await messaging.getToken()
  const apollo = getApolloClient(auth)

  await apollo.mutate<
    SetFirebaseMessagingTokenMutation,
    SetFirebaseMessagingTokenMutationVariables
  >({
    mutation: SetFirebaseMessagingTokenDocument,
    variables: {
      token,
      userId,
      notificationsEnabled,
    },
  })
}
