export const config = {
  nhostBackendUrl: 'https://backend-rf2zfg3c.nhost.app',
  hasuraWebhookSecret: process.env.HASURA_WEBHOOK_SECRET,
  hasuraAdminSecret: process.env.HASURA_ADMIN_SECRET,
  stripePublishableKey: 'pk_test_Lkg8hgz6A0PYHin7ogg9uvlY00zEY7djQM',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  stripeApiVersion: '2020-03-02' as '2020-03-02',
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  googleMapsApiKey: 'AIzaSyA0gDIxa9dRZdlNFVL7hL_P-U5YzTnZCIE',
}
