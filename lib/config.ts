export const config = {
  baseUrl:
    process.env.VERCEL_GITHUB_COMMIT_REF === 'master'
      ? 'https://app.servehub.com'
      : process.env.VERCEL_URL?.startsWith('http')
      ? process.env.VERCEL_URL
      : `https://${process.env.VERCEL_URL}`,
  nhostBackendUrl: process.env.NHOST_BACKEND_URL,
  hasuraWebhookSecret: process.env.HASURA_WEBHOOK_SECRET,
  hasuraAdminSecret: process.env.HASURA_ADMIN_SECRET,
  hasuraHttpEndpoint: process.env.HASURA_HTTP_ENDPOINT,
  hasuraWsEndpoint: process.env.HASURA_WS_ENDPOINT,
  stripePublishableKey: 'pk_test_Lkg8hgz6A0PYHin7ogg9uvlY00zEY7djQM',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  stripeApiVersion: '2020-03-02' as '2020-03-02',
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  googleMapsApiKey: 'AIzaSyA0gDIxa9dRZdlNFVL7hL_P-U5YzTnZCIE',
  firebaseInitialization: {
    apiKey: 'AIzaSyA0gDIxa9dRZdlNFVL7hL_P-U5YzTnZCIE',
    authDomain: 'servehub.firebaseapp.com',
    databaseURL: 'https://servehub.firebaseio.com',
    projectId: 'servehub',
    storageBucket: 'servehub.appspot.com',
    messagingSenderId: '220994366954',
    appId: '1:220994366954:web:2c237a03e9140a50489693',
  },
  firebaseMessagingPublicKey:
    'BIJWEPpHzfSfHSXJD_nWY4Vvv57S_z-Te7vULz-swTKwzjT6SiWYbIoR01KSGPd6zzHoflx9n3LNBdL7DhwnKbM',
  firebaseAdminCredentials: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  postmarkSecretKey: process.env.POSTMARK_SECRET_KEY,
}
