import { NextApiRequest, NextApiResponse } from 'next'
import {
  SetIntentDocument,
  SetIntentQuery,
  SetIntentQueryVariables,
  SetJobStripePaymentIntentDocument,
  SetJobStripePaymentIntentMutation,
  SetJobStripePaymentIntentMutationVariables,
} from '../../../graphql-codegen'
import { ApiAuthClient } from '../../../lib/AuthClient'
import { config } from '../../../lib/config'
import { createStripeCustomer } from '../../../lib/createStripeCustomer'
import { getApolloClient } from '../../../lib/getApolloClient'
import { getStripeServerClient } from '../../../lib/getStripeServerClient'

export default async function stripeSetIntent(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('[stripeSetIntent] init')
  if (!config.hasuraAdminSecret || !config.stripeSecretKey) {
    throw new Error('Missing secrets required for Hasura webhooks')
  }

  const { jobId, planId } = req.body as {
    jobId?: string
    planId?: string
  }
  if (!jobId || !planId) {
    throw new Error('jobId or planId missing from json body')
  }

  const apollo = getApolloClient(new ApiAuthClient())
  const stripe = getStripeServerClient()

  const { data } = await apollo.query<SetIntentQuery, SetIntentQueryVariables>({
    query: SetIntentDocument,
    variables: { jobId, planId },
  })

  if (!data.job || !data.plan) {
    throw new Error('jobId or planId invalid')
  }

  const stripeCustomerId = !data.job.lawyer.stripe_customer_id
    ? await createStripeCustomer(apollo, data.job.lawyer.id)
    : data.job.lawyer.stripe_customer_id

  const paymentIntent = await stripe.paymentIntents.create({
    amount: data.plan.fee + data.plan.bounty,
    currency: 'cad',
    customer: stripeCustomerId,
    metadata: {
      jobId,
      planId,
    },
  })

  const { errors } = await apollo.mutate<
    SetJobStripePaymentIntentMutation,
    SetJobStripePaymentIntentMutationVariables
  >({
    variables: {
      jobId: data.job.id,
      stripePaymentIntentId: paymentIntent.id,
      stripePaymentIntentClientSecret: paymentIntent.client_secret!,
    },
    mutation: SetJobStripePaymentIntentDocument,
  })

  if (errors) {
    console.error(errors)
  }

  res.send('✔')
}
