import { buffer } from 'micro'
import Cors from 'micro-cors'
import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import {
  SetJobStripePaymentIntentSucceededDocument,
  SetJobStripePaymentIntentSucceededMutation,
  SetJobStripePaymentIntentSucceededMutationVariables,
} from '../../../graphql-codegen'
import { config as appConfig } from '../../../lib/config'
import { getApolloClient } from '../../../lib/getApolloClient'
import { getStripeServerClient } from '../../../lib/getStripeServerClient'
import { ApiAuthClient } from '../../../lib/AuthClient'

export const config = {
  api: {
    bodyParser: false,
  },
}

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
})

export default cors(async function stripeWebhook(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('[stripeWebhook] init')

  if (!appConfig.stripeWebhookSecret) {
    throw new Error(
      'stripeWebhookSecret missing in config when trying to process stripe webhook',
    )
  }

  const buf = await buffer(req)
  const sig = req.headers['stripe-signature']!

  const stripe = getStripeServerClient()
  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      buf.toString(),
      sig,
      appConfig.stripeWebhookSecret,
    )
  } catch (err) {
    console.log(`❌ stripe error: ${err.message}`)
    return res.status(400).end()
  }

  switch (event.type) {
    case 'payment_intent.succeeded': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      console.log('PaymentIntent was successful!', paymentIntent)

      const apollo = getApolloClient(new ApiAuthClient())

      await apollo.mutate<
        SetJobStripePaymentIntentSucceededMutation,
        SetJobStripePaymentIntentSucceededMutationVariables
      >({
        variables: { stripePaymentIntentId: paymentIntent.id },
        mutation: SetJobStripePaymentIntentSucceededDocument,
      })

      break
    }
    default:
      return res.status(400).end()
  }

  res.send('✔')
} as any)
