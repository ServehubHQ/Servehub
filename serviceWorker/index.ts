import { precacheAndRoute } from 'workbox-precaching'
import './pushNotifications'

console.log('Hello Service Worker')

precacheAndRoute(self.__WB_MANIFEST)
