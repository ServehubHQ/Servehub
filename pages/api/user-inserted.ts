import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import {
  SetRoleDocument,
  SetStripeCustomerIdDocument,
} from '../../graphql-codegen'
import { config } from '../../lib/config'
import { getApolloClient } from '../../lib/getApolloClient'

export default async function UserInsertedApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!config.hasuraAdminSecret || !config.stripeSecretKey) {
    throw new Error('Missing secrets required for Hasura webhooks')
  }

  if (req.headers['x-hasura-webhook-secret'] !== config.hasuraWebhookSecret) {
    console.log(
      'invalid secret',
      req.headers['x-hasura-webhook-secret'],
      config.hasuraWebhookSecret,
      req.headers,
    )
    res.writeHead(403).end()
    return
  }

  const {
    event: {
      data: { new: user },
    },
  } = req.body
  console.log('user inserted', user)

  const role = user.register_data.role
  if (role !== 'lawyer' && role !== 'server') {
    res.writeHead(403).end()
    return
  }

  const apollo = getApolloClient({
    isAdmin: true,
    adminSecret: config.hasuraAdminSecret,
  })

  await apollo.mutate({
    variables: { userId: user.id, role },
    mutation: SetRoleDocument,
  })

  if (role === 'lawyer') {
    const stripe = new Stripe(config.stripeSecretKey, {
      apiVersion: config.stripeApiVersion,
    })
    const customer = await stripe.customers.create()

    await apollo.mutate({
      variables: { userId: user.id, stripeCustomerId: customer.id },
      mutation: SetStripeCustomerIdDocument,
    })
  }

  res.send('okay')
}
