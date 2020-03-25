import firebase from 'firebase/app'
import 'firebase/messaging'
import { getApolloClient } from './getApolloClient'
import { getAuthClient } from './getAuthClient'
import {
  SetFirebaseMessagingTokenMutation,
  SetFirebaseMessagingTokenMutationVariables,
  SetFirebaseMessagingTokenDocument,
} from '../graphql-codegen'

let messagingInitialized = false

export function initFirebase() {
  firebase.initializeApp({
    apiKey: 'AIzaSyA0gDIxa9dRZdlNFVL7hL_P-U5YzTnZCIE',
    authDomain: 'servehub.firebaseapp.com',
    databaseURL: 'https://servehub.firebaseio.com',
    projectId: 'servehub',
    storageBucket: 'servehub.appspot.com',
    messagingSenderId: '220994366954',
    appId: '1:220994366954:web:2c237a03e9140a50489693',
  })
}

export async function getAndSaveMessagingToken() {
  const messaging = firebase.messaging()
  const token = await messaging.getToken()
  const auth = getAuthClient()
  const userId = auth.getUserId()
  const apollo = getApolloClient(auth)

  if (!userId) {
    throw new Error('Attempt to save messaging token for an unauthed user')
  }

  await apollo.mutate<
    SetFirebaseMessagingTokenMutation,
    SetFirebaseMessagingTokenMutationVariables
  >({
    mutation: SetFirebaseMessagingTokenDocument,
    variables: {
      token,
      userId,
    },
  })
}

export async function initMessaging() {
  if (messagingInitialized) return

  initFirebase()

  const serviceWorker = await navigator.serviceWorker.ready
  const messaging = firebase.messaging()
  messaging.useServiceWorker(serviceWorker)
  messaging.usePublicVapidKey(
    'BIJWEPpHzfSfHSXJD_nWY4Vvv57S_z-Te7vULz-swTKwzjT6SiWYbIoR01KSGPd6zzHoflx9n3LNBdL7DhwnKbM',
  )

  messaging.onTokenRefresh(getAndSaveMessagingToken)
  messaging.onMessage((payload) => {
    console.log('Message received', payload)
  })

  messagingInitialized = true
}
