import { NextApiRequest, NextApiResponse } from 'next'
import { SetRoleDocument } from '../../graphql-codegen'
import { config } from '../../lib/config'
import { getApolloClient } from '../../lib/getApolloClient'

export default async function UserInsertedApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
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
  if (!config.hasuraAdminSecret) {
    throw new Error('Hasura admin secret required for Hasura webhooks')
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

  if (role) {
    await apollo.mutate({
      variables: { userId: user.id, role },
      mutation: SetRoleDocument,
    })
  }

  res.send('okay')
}
