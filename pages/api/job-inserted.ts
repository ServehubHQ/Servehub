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
import { createStripeCustomer } from '../../lib/createStripeCustomer'

export default async function jobInsertedApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('jobInsertedApi')
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

  const stripeCustomerId = !data.jobs[0].lawyer.stripe_customer_id
    ? await createStripeCustomer(apollo, data.jobs[0].lawyer.id)
    : data.jobs[0].lawyer.stripe_customer_id

  if (!job.stripe_payment_intent_id) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 10000,
      currency: 'cad',
      customer: stripeCustomerId,
    })

    const { errors } = await apollo.mutate<
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

    if (errors) {
      console.error(errors)
    }
  }

  res.send('okay')
}
