import { NextApiRequest, NextApiResponse } from 'next'
import { ServerClient } from 'postmark'
import {
  HasuraMessageInsertedApiDocument,
  HasuraMessageInsertedApiQuery,
  HasuraMessageInsertedApiQueryVariables,
  Messages,
} from '../../../../graphql-codegen'
import { ApiAuthClient } from '../../../../lib/AuthClient'
import { config } from '../../../../lib/config'
import { getApolloClient } from '../../../../lib/getApolloClient'
import hasuraWebhookValid from '../../../../lib/hasuraWebhookValid'
import { sendFirebaseMessage } from '../../../../lib/sendFirebaseMessage'
import { timeout } from '../../../../lib/timeout'

export default async function hasuraMessageInsertedApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('[hasuraMessageInsertedApi] init')
  if (!hasuraWebhookValid(req, res)) return
  if (!config.hasuraAdminSecret) {
    throw new Error('Missing secrets required for Hasura webhooks')
  }
  if (!config.postmarkSecretKey) {
    throw new Error('Missing config.postmarkSecretKey')
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
    const [recipient, sender] =
      data.message.user.id === data.message.job.lawyer.id
        ? [data.message.job.server, data.message.job.lawyer]
        : [data.message.job.lawyer, data.message.job.server]
    if (recipient) {
      const title = `New message for job: ${data.message.job.target_name}`
      const ctaUrl = `${config.baseUrl}/jobs/${data.message.job.id}/chat`

      if (
        recipient.notifications_enabled &&
        recipient.firebase_messaging_token
      ) {
        await sendFirebaseMessage([recipient], {
          title,
          body: data.message.message,
          click_action: ctaUrl,
        })
      }

      if (recipient.email_notifications_enabled) {
        const postmark = new ServerClient(config.postmarkSecretKey)
        postmark.sendEmail({
          From: 'Servehub <hello@servehub.com>',
          To: `${recipient.email} <${recipient.email!}>`,
          Subject: `📑 ${title}`,
          TextBody: `Hello,

You've recieved a new message from ${sender?.name} regarding ${
            data.message.job.target_name
          }.

${data.message.message.split('\n').map(
  (line) => `
> ${line}`,
)}

${ctaUrl}

Servehub Team`,
        })
      }
    }
  }

  res.send('✔')
}
