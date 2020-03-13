import { NextApiRequest, NextApiResponse } from 'next'
import {
  SetRoleDocument,
  SetRoleMutation,
  SetRoleMutationVariables,
  SetStripeCustomerIdDocument,
  SetStripeCustomerIdMutation,
  SetStripeCustomerIdMutationVariables,
} from '../../graphql-codegen'
import { getApolloClient } from '../../lib/getApolloClient'
import { getStripeServerClient } from '../../lib/getStripeServerClient'
import hasuraWebhookValid from '../../lib/hasuraWebhookValid'

export default async function UserInsertedApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!hasuraWebhookValid(req, res)) return

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

  const apollo = getApolloClient({ isAdmin: true })

  await apollo.mutate<SetRoleMutation, SetRoleMutationVariables>({
    variables: { userId: user.id, role },
    mutation: SetRoleDocument,
  })

  if (role === 'lawyer') {
    const stripe = getStripeServerClient()
    const customer = await stripe.customers.create()

    await apollo.mutate<
      SetStripeCustomerIdMutation,
      SetStripeCustomerIdMutationVariables
    >({
      variables: { userId: user.id, stripeCustomerId: customer.id },
      mutation: SetStripeCustomerIdDocument,
    })
  }

  res.send('okay')
}
