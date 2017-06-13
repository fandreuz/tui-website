const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, '../src/app.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
    ]
  }
}
