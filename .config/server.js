const path = require('path')
const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.dev')

config.entry[0] =
  [
    ('webpack-dev-server/client?http://localhost:8080'),
    'webpack/hot/dev-server',
    'bundle.js'
  ]

config.plugins =
  [new webpack.HotModuleReplacementPlugin()].concat(config.plugins || [])

const compiler = webpack(config)

const server =
  new WebpackDevServer(compiler, {
    hot: true,
    contentBase: path.join(__dirname, '../build'),
    headers: { 'Access-Control-Allow-Origin': '*' }
  })

server.listen('8080')