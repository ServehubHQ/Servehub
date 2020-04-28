require('dotenv').config()
const withOffline = require('next-offline')
const { join } = require('path')

module.exports = withOffline({
  target: 'serverless',
  generateSw: false,
  workboxOpts: {
    swSrc: join(__dirname, 'serviceWorker', 'index.ts'),
    swDest: './static/service-worker.js',
  },
  env: {
    NHOST_BACKEND_URL: process.env.NHOST_BACKEND_URL,
    HASURA_HTTP_ENDPOINT: process.env.HASURA_HTTP_ENDPOINT,
    HASURA_WS_ENDPOINT: process.env.HASURA_WS_ENDPOINT,
    VERCEL_URL: process.env.VERCEL_URL,
  },
})
