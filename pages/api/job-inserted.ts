import { NextApiRequest, NextApiResponse } from 'next'
import {
  JobInsertedDocument,
  JobInsertedQuery,
  JobInsertedQueryVariables,
  SetJobStripePaymentIntentDocument,
  SetJobStripePaymentIntentMutation,
  SetJobStripePaymentIntentMutationVariables,
} from '../../graphql-codegen'
import { config } from '../../lib/config'
import { getApolloClient } from '../../lib/getApolloClient'
import { getStripeServerClient } from '../../lib/getStripeServerClient'
import hasuraWebhookValid from '../../lib/hasuraWebhookValid'

export default async function JobInsertedApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!hasuraWebhookValid(req, res)) return
  if (!config.hasuraAdminSecret || !config.stripeSecretKey) {
    throw new Error('Missing secrets required for Hasura webhooks')
  }

  const {
    event: {
      data: { new: job },
    },
  } = req.body
  console.log('job inserted', job)

  const apollo = getApolloClient({ isAdmin: true })
  const stripe = getStripeServerClient()

  const { data } = await apollo.query<
    JobInsertedQuery,
    JobInsertedQueryVariables
  >({
    query: JobInsertedDocument,
    variables: { jobId: job.id },
  })

  if (!data.users[0].stripe_customer_id) {
    throw new Error('Job created by a user without a stripe_customer_id')
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 10000,
    currency: 'cad',
    customer: data.users[0].stripe_customer_id,
  })

  await apollo.mutate<
    SetJobStripePaymentIntentMutation,
    SetJobStripePaymentIntentMutationVariables
  >({
    variables: {
      jobId: job.id,
      stripePaymentIntentId: paymentIntent.id,
      stripePaymentIntentClientSecret: paymentIntent.client_secret!,
    },
    mutation: SetJobStripePaymentIntentDocument,
  })

  res.send('okay')
}
