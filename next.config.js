require('dotenv').config()
const withOffline = require('next-offline')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const nextConfig = {
  target: 'serverless',
  // transformManifest: (manifest) => ['/'].concat(manifest),
  generateInDevMode: true,
  // workboxOpts: {
  // importScripts: ['./serviceWorker/pushNotifications.js'],
  //   swDest: 'static/service-worker.js',
  //   runtimeCaching: [
  //     {
  //       urlPattern: /^https?.*/,
  //       handler: 'NetworkFirst',
  //       options: {
  //         cacheName: 'https-calls',
  //         networkTimeoutSeconds: 15,
  //         expiration: {
  //           maxEntries: 150,
  //           maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
  //         },
  //         cacheableResponse: {
  //           statuses: [0, 200],
  //         },
  //       },
  //     },
  //   ],
  // },
  // this will output your push listener file to .next folder
  // check CopyWebpackPlugin docs if you want to change the destination (e.g. /static or /.next/static)
  // plugins: [new CopyWebpackPlugin(['./serviceWorker/pushNotifications.ts'])],
}

module.exports = withOffline(nextConfig)
