import firebaseAdmin from 'firebase-admin'
import { config } from './config'
import { isString } from './isString'

interface MessageUser {
  firebase_messaging_token?: string | null
  notifications_enabled: boolean
}

export async function sendFirebaseMessage(
  users: MessageUser[],
  notification: firebaseAdmin.messaging.WebpushConfig['notification'],
): Promise<void> {
  if (!config.firebaseAdminCredentials) {
    throw new Error('Missing firebaseAdminCredentials')
  }
  if (typeof notification === 'undefined') {
    throw new Error('Missing notification')
  }

  const tokens = users
    .map((user) => user.notifications_enabled && user.firebase_messaging_token)
    .filter(isString)
  if (tokens.length === 0) {
    return
  }

  if (!notification.icon && !notification.badge) {
    notification.icon = `${config.baseUrl}/images/brand/icon-512x512.png`
    notification.badge = `${config.baseUrl}/images/brand/icon-512x512.png`
  }

  if (firebaseAdmin.apps.length === 0) {
    firebaseAdmin.initializeApp({
      ...config.firebaseInitialization,
      credential: firebaseAdmin.credential.cert(
        JSON.parse(config.firebaseAdminCredentials),
      ),
    })
  }
  const messaging = firebaseAdmin.messaging()
  await messaging.sendMulticast({
    webpush: { notification },
    tokens: users.map((user) => user.firebase_messaging_token).filter(isString),
  })
}
