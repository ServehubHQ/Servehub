import { getStripeServerClient } from './getStripeServerClient'
import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import {
  SetStripeCustomerIdMutation,
  SetStripeCustomerIdMutationVariables,
  SetStripeCustomerIdDocument,
} from '../graphql-codegen'

export async function createStripeCustomer(
  apollo: ApolloClient<NormalizedCacheObject>,
  userId: string,
) {
  const stripe = getStripeServerClient()
  const customer = await stripe.customers.create()

  await apollo.mutate<
    SetStripeCustomerIdMutation,
    SetStripeCustomerIdMutationVariables
  >({
    variables: { userId: userId, stripeCustomerId: customer.id },
    mutation: SetStripeCustomerIdDocument,
  })

  return customer.id
}
