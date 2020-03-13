import { config } from './config'
import { NextApiResponse, NextApiRequest } from 'next'

export default async function hasuraWebhookValid(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!config.hasuraAdminSecret) {
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
    return false
  } else {
    return true
  }
}
