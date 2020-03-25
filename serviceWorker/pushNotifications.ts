import firebase from 'firebase/app'
import 'firebase/messaging'
import { initFirebase } from '../lib/firebaseMessaging'

initFirebase()
const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Received background message', payload)
})

console.log('Hello Firebase Messaging')
