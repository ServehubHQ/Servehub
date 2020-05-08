import { NextApiRequest, NextApiResponse } from 'next'
import {
  Jobs,
  JobUpdatedDocument,
  JobUpdatedQuery,
  JobUpdatedQueryVariables,
  JobUpdatedServersQuery,
  JobUpdatedServersQueryVariables,
  JobUpdatedServersDocument,
} from '../../../../graphql-codegen'
import { ApiAuthClient } from '../../../../lib/AuthClient'
import { config } from '../../../../lib/config'
import { getApolloClient } from '../../../../lib/getApolloClient'
import hasuraWebhookValid from '../../../../lib/hasuraWebhookValid'
import { sendFirebaseMessage } from '../../../../lib/sendFirebaseMessage'
import { ServerClient } from 'postmark'

export default async function hasurajobUpdatedApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('[hasurajobUpdatedApi] init')
  if (!hasuraWebhookValid(req, res)) return
  if (!config.hasuraAdminSecret || !config.firebaseAdminCredentials) {
    throw new Error('Missing secrets required for Hasura webhooks')
  }
  if (!config.postmarkSecretKey) {
    throw new Error('Missing config.postmarkSecretKey')
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

    const { data: jobData } = await apollo.query<
      JobUpdatedQuery,
      JobUpdatedQueryVariables
    >({
      query: JobUpdatedDocument,
      variables: { jobId: job.id },
    })

    if (!jobData.job?.target_address?.city) {
      throw new Error('Cannot find job city')
    }

    const { data } = await apollo.query<
      JobUpdatedServersQuery,
      JobUpdatedServersQueryVariables
    >({
      query: JobUpdatedServersDocument,
      variables: { city: jobData.job.target_address.city },
    })

    const title = 'New Servehub job available!'
    const ctaUrl = `${config.baseUrl}/jobs/available/${job.id}`

    console.log('[hasurajobUpdatedApi] sending firebase messages')
    await sendFirebaseMessage(data.users, {
      title,
      body: 'Click to learn more',
      click_action: ctaUrl,
    })

    const postmark = new ServerClient(config.postmarkSecretKey)
    for (const recipient of data.users) {
      if (recipient.email_notifications_enabled) {
        postmark.sendEmail({
          From: 'Servehub <hello@servehub.com>',
          To: `${recipient.email} <${recipient.email!}>`,
          Subject: `📑 ${title}`,
          TextBody: `Hello,

Click below to learn more.
${ctaUrl}

Servehub Team`,
        })
      }
    }
  }

  res.send('✔')
}
