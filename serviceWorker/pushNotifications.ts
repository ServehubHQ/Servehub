import firebase from 'firebase/app'
import 'firebase/messaging'
import { config } from '../lib/config'

firebase.initializeApp(config.firebaseInitialization)

const messaging = firebase.messaging()
messaging.usePublicVapidKey(config.firebaseMessagingPublicKey)
console.log('[pushNotifications] initialized')
