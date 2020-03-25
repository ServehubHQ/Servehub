import { precacheAndRoute } from 'workbox-precaching'
import './pushNotifications'

precacheAndRoute(self.__WB_MANIFEST)
