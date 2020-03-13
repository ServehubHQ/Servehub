import { config } from './config'
import Stripe from 'stripe'

export function getStripeServerClient() {
  if (!config.stripeSecretKey) {
    throw new Error('Attempt to initialize stripe on server without secret')
  }
  if (typeof window !== 'undefined') {
    throw new Error('Attempt to initialize stripe server client in browser')
  }

  return new Stripe(config.stripeSecretKey, {
    apiVersion: config.stripeApiVersion,
  })
}
