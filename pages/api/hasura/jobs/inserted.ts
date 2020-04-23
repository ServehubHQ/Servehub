import { NextApiRequest, NextApiResponse } from 'next'
import { config } from '../../../../lib/config'
import hasuraWebhookValid from '../../../../lib/hasuraWebhookValid'
import { Jobs } from '../../../../graphql-codegen'

export default async function hasurajobInsertedApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('[hasurajobInsertedApi] init')
  if (!hasuraWebhookValid(req, res)) return
  if (!config.hasuraAdminSecret || !config.stripeSecretKey) {
    throw new Error('Missing secrets required for Hasura webhooks')
  }

  const {
    event: {
      data: { new: job },
    },
  } = req.body as {
    event: {
      data: { new: Jobs }
    }
  }
  console.log('[hasurajobInsertedApi] job inserted', job)

  res.send('✔')
}
