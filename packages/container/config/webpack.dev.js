const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commmonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devServer = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8001/',
  },
  devServer: {
    port: 8001,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8002/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
}

module.exports = merge(commmonConfig, devServer)
