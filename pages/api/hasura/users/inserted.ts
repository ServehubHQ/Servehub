import { NextApiRequest, NextApiResponse } from 'next'
import { ServerClient } from 'postmark'
import {
  PostSignupDocument,
  PostSignupMutation,
  PostSignupMutationVariables,
  Users,
} from '../../../../graphql-codegen'
import { ApiAuthClient } from '../../../../lib/AuthClient'
import { config } from '../../../../lib/config'
import { createStripeCustomer } from '../../../../lib/createStripeCustomer'
import { getApolloClient } from '../../../../lib/getApolloClient'
import hasuraWebhookValid from '../../../../lib/hasuraWebhookValid'

export default async function hasuraUserInserted(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('hasuraUserInserted')
  if (!hasuraWebhookValid(req, res)) return
  if (!config.postmarkSecretKey) {
    throw new Error('missing POSTMARK_SECRET_KEY env var')
  }

  const {
    event: {
      data: { new: user },
    },
  } = req.body as {
    event: {
      data: {
        new: Users
      }
    }
  }
  console.log('user inserted', user)

  const role = user.register_data.role
  if (role !== 'lawyer' && role !== 'server') {
    return res.status(403).end()
  }

  const apollo = getApolloClient(new ApiAuthClient())

  await apollo.mutate<PostSignupMutation, PostSignupMutationVariables>({
    variables: { userId: user.id, role, name: user.register_data.name },
    mutation: PostSignupDocument,
  })

  if (role === 'lawyer' && !user.stripe_customer_id) {
    await createStripeCustomer(apollo, user.id)
  }

  if (role === 'server') {
    const postmark = new ServerClient(config.postmarkSecretKey)

    postmark.sendEmail({
      From: 'Servehub <hello@servehub.com>',
      To: user.email!,
      Subject: '📑 Get Started on Servehub - Complete Background Check',
      TextBody: `Hello${user.name ? ` ${user.name},` : ','}

To start accepting jobs on Servehub, you first need to complete a background check.

Thanks,
Servehub Team`,
    })
  }

  res.send('✔')
}
