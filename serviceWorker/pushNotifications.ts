import firebase from 'firebase/app'
import 'firebase/messaging'
import { config } from '../lib/config'

firebase.initializeApp(config.firebaseInitialization)

const messaging = firebase.messaging()
messaging.usePublicVapidKey(config.firebaseMessagingPublicKey)
console.log('[pushNotifications] initialized')

// @ts-ignore
// self.onnotificationclick = function(event: any) {
// self.addEventListener('notificationclick', (event: any) => {
//   console.log('[notification click]', event)
// }

// self.onNotificationClick = function(event) {
//   console.log('On notification click: ', event.notification.tag)
//   event.notification.close()

//   // This looks to see if the current is already open and
//   // focuses if it is
//   event.waitUntil(
//     clients
//       .matchAll({
//         type: 'window',
//       })
//       .then(function(clientList) {
//         for (var i = 0; i < clientList.length; i++) {
//           var client = clientList[i]
//           if (client.url == '/' && 'focus' in client) return client.focus()
//         }
//         if (clients.openWindow) return clients.openWindow('/')
//       }),
//   )
// }
