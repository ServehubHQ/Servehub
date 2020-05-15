import moment from 'moment'
import { NextApiRequest, NextApiResponse } from 'next'
import { ServerClient } from 'postmark'
import { v4 as uuid4 } from 'uuid'
import {
  PrepareResetPasswordDocument,
  PrepareResetPasswordMutation,
  PrepareResetPasswordMutationVariables,
} from '../../graphql-codegen'
import { ApiAuthClient } from '../../lib/AuthClient'
import { config } from '../../lib/config'
import { getApolloClient } from '../../lib/getApolloClient'

export default async function resetPasswordApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!config.hasuraAdminSecret) {
    throw new Error('Missing secrets required for Hasura webhooks')
  }
  if (!config.postmarkSecretKey) {
    throw new Error('Missing config.postmarkSecretKey')
  }

  const token = uuid4()
  const email = req.body.email?.trim()

  if (typeof email !== 'string') {
    throw new Error('Missing email argument')
  }

  const apollo = getApolloClient(new ApiAuthClient())
  const { data } = await apollo.mutate<
    PrepareResetPasswordMutation,
    PrepareResetPasswordMutationVariables
  >({
    mutation: PrepareResetPasswordDocument,
    variables: {
      email,
      token,
      expiry: moment()
        .add(1, 'day')
        .toISOString(),
    },
  })

  const user = data?.update_users?.returning?.[0]
  if (!user) {
    console.log('Cannot find user in data', data)
    throw new Error(`Could not find user for email ${email}`)
  }

  const postmark = new ServerClient(config.postmarkSecretKey)
  await postmark.sendEmail({
    From: 'Servehub <hello@servehub.com>',
    To: `${user.name} <${user.email!}>`,
    Subject: `📑 Password Reset`,
    TextBody: `Hello,

Please click the link below to reset your password.

${config.baseUrl}/password-reset?secret=${token}&email=${encodeURIComponent(
      user.email!,
    )}

Servehub Team`,
  })

  res.send('✔')
}
