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
})
