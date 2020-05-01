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

    console.log('[hasurajobUpdatedApi] sending firebase message')
    console.log(data.users, {
      title: 'New Servehub job available!',
      body: 'Click to learn more',
      icon: `${config.baseUrl}/images/brand/icon-512x512.png`,
      badge: `${config.baseUrl}/images/brand/icon-512x512.png`,
      click_action: `${config.baseUrl}/jobs/available/${job.id}`,
    })

    await sendFirebaseMessage(data.users, {
      title: 'New Servehub job available!',
      body: 'Click to learn more',
      icon: `${config.baseUrl}/images/brand/icon-512x512.png`,
      badge: `${config.baseUrl}/images/brand/icon-512x512.png`,
      click_action: `${config.baseUrl}/jobs/available/${job.id}`,
    })
  }

  res.send('✔')
}
