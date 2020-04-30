import { NextApiRequest, NextApiResponse } from 'next'
import {
  Messages,
  HasuraMessageInsertedApiQuery,
  HasuraMessageInsertedApiQueryVariables,
  HasuraMessageInsertedApiDocument,
} from '../../../../graphql-codegen'
import { config } from '../../../../lib/config'
import hasuraWebhookValid from '../../../../lib/hasuraWebhookValid'
import { timeout } from '../../../../lib/timeout'
import { getApolloClient } from '../../../../lib/getApolloClient'
import { ApiAuthClient } from '../../../../lib/AuthClient'
import { sendFirebaseMessage } from '../../../../lib/sendFirebaseMessage'

export default async function hasuraMessageInsertedApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('[hasuraMessageInsertedApi] init')
  if (!hasuraWebhookValid(req, res)) return
  if (!config.hasuraAdminSecret) {
    throw new Error('Missing secrets required for Hasura webhooks')
  }

  const {
    event: {
      data: { new: message },
    },
  } = req.body as {
    event: {
      data: { new: Messages }
    }
  }
  console.log('[hasuraMessageInsertedApi] message inserted', message)

  // Give them a chance to read the message
  await timeout(5000)

  const apollo = getApolloClient(new ApiAuthClient())
  const { data } = await apollo.query<
    HasuraMessageInsertedApiQuery,
    HasuraMessageInsertedApiQueryVariables
  >({
    query: HasuraMessageInsertedApiDocument,
    variables: { messageId: message.id },
  })

  if (!data.message) {
    throw new Error('Unable to find message')
  }

  if (!data.message.read_at) {
    const recipient =
      data.message.user.id === data.message.job.lawyer.id
        ? data.message.job.server
        : data.message.job.lawyer
    if (recipient) {
      await sendFirebaseMessage([recipient], {
        title: `New message for job: ${data.message.job.target_name}`,
        body: data.message.message,
        icon: `${config.baseUrl}/images/brand/icon-512x512.png`,
        badge: `${config.baseUrl}/images/brand/icon-512x512.png`,
        click_action: `${config.baseUrl}/jobs/${data.message.job.id}/chat`,
      })
    }
  }

  res.send('✔')
}
