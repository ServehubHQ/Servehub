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
    throw new Error(`User role unrecognized: "${role}"`)
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
    await postmark.sendEmail({
      From: 'Servehub <hello@servehub.com>',
      To: user.email!,
      Subject: '📑 Get Started on Servehub',
      TextBody: `Hello,

To start accepting jobs on Servehub, we need to get to know you a little.

Send us a photo of your driver's license, vehicle insurance, vehicle registration
and a clear background check with your phone number and we will let you know in a
few days if you've been approved.

Thanks,
Servehub Team`,
    })
  }

  res.send('✔')
}
