const CracoLessPlugin = require('craco-less')
const FastRefreshCracoPlugin = require('craco-fast-refresh')
const { whenDev } = require('@craco/craco')
module.exports = {
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
