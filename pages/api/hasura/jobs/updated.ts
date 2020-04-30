import { NextApiRequest, NextApiResponse } from 'next'
import {
  Jobs,
  JobUpdatedDocument,
  JobUpdatedQuery,
  JobUpdatedQueryVariables,
} from '../../../../graphql-codegen'
import { ApiAuthClient } from '../../../../lib/AuthClient'
import { config } from '../../../../lib/config'
import { getApolloClient } from '../../../../lib/getApolloClient'
import hasuraWebhookValid from '../../../../lib/hasuraWebhookValid'
import { sendFirebaseMessage } from '../../../../lib/sendFirebaseMessage'

export default async function hasurajobUpdatedApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('[hasurajobUpdatedApi] init')
  if (!hasuraWebhookValid(req, res)) return
  if (!config.hasuraAdminSecret || !config.firebaseAdminCredentials) {
    throw new Error('Missing secrets required for Hasura webhooks')
  }

  const {
    event: {
      data: { new: job },
    },
  } = req.body as {
    event: {
      data: {
        new: Jobs
      }
    }
  }
  console.log('[hasurajobUpdatedApi] job updated', job)

  if (job.stripe_payment_intent_succeeded && !job.server_user_id) {
    const apollo = getApolloClient(new ApiAuthClient())

    const { data } = await apollo.query<
      JobUpdatedQuery,
      JobUpdatedQueryVariables
    >({
      query: JobUpdatedDocument,
    })

    console.log('[hasurajobUpdatedApi] sending firebase message')

    await sendFirebaseMessage(data.users, {
      title: 'New Servehub job available!',
      body: 'Click here to learn more',
      icon: `${config.baseUrl}/images/brand/icon-512x512.png`,
      click_action: `${config.baseUrl}/jobs/${job.id}`,
    })
  }

  res.send('✔')
}
