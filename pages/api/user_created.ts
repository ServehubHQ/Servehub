import { NextApiRequest, NextApiResponse } from 'next'

export default function UserCreatedApi(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('user created')
  console.log('webhook secret', req.headers['x-hasura-webhook-secret'])
  res.send('okay')
}
