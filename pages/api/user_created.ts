import { NextApiRequest, NextApiResponse } from 'next'

export default function(req: NextApiRequest, res: NextApiResponse) {
  console.log('user created')
  console.log('webhook secret', req.headers['x-hasura-webhook-secret'])
  res.send('okay')
}
