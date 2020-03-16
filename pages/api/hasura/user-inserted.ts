import { NextApiRequest, NextApiResponse } from 'next'
import {
  SetRoleDocument,
  SetRoleMutation,
  SetRoleMutationVariables,
} from '../../../graphql-codegen'
import { createStripeCustomer } from '../../../lib/createStripeCustomer'
import { getApolloClient } from '../../../lib/getApolloClient'
import hasuraWebhookValid from '../../../lib/hasuraWebhookValid'

export default async function hasuraUserInserted(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('hasuraUserInserted')
  if (!hasuraWebhookValid(req, res)) return

  const {
    event: {
      data: { new: user },
    },
  } = req.body
  console.log('user inserted', user)

  const role = user.register_data.role
  if (role !== 'lawyer' && role !== 'server') {
    return res.status(403).end()
  }

  const apollo = getApolloClient({ isAdmin: true })

  await apollo.mutate<SetRoleMutation, SetRoleMutationVariables>({
    variables: { userId: user.id, role },
    mutation: SetRoleDocument,
  })

  if (role === 'lawyer' && !user.stripe_customer_id) {
    await createStripeCustomer(apollo, user.id)
  }

  res.send('✔')
}
