import firebaseAdmin from 'firebase-admin'
import { NextApiRequest, NextApiResponse } from 'next'
import {
  Jobs,
  JobUpdatedDocument,
  JobUpdatedQuery,
  JobUpdatedQueryVariables,
} from '../../../../graphql-codegen'
import { config } from '../../../../lib/config'
import { getApolloClient } from '../../../../lib/getApolloClient'
import hasuraWebhookValid from '../../../../lib/hasuraWebhookValid'
import { ApiAuthClient } from '../../../../lib/AuthClient'

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
    if (firebaseAdmin.apps.length === 0) {
      firebaseAdmin.initializeApp({
        ...config.firebaseInitialization,
        credential: firebaseAdmin.credential.cert(
          JSON.parse(config.firebaseAdminCredentials),
        ),
      })
    }
    const messaging = firebaseAdmin.messaging()
    const apollo = getApolloClient(new ApiAuthClient())

    const { data } = await apollo.query<
      JobUpdatedQuery,
      JobUpdatedQueryVariables
    >({
      query: JobUpdatedDocument,
    })

    console.log('[hasurajobUpdatedApi] data', data)

    const notification: firebaseAdmin.messaging.WebpushConfig['notification'] = {
      title: 'New Job!',
      body: 'Click here to learn more',
      icon: 'https://placekitten.com/360/240',
      badge: 'https://placekitten.com/512/512',
      click_action: `https://defrex.ngrok.io/jobs/${job.id}`,
    }

    await messaging.sendMulticast({
      webpush: { notification },
      tokens: data.users.map((server) => server.firebase_messaging_token!),
    })
  }

  res.send('✔')
}
