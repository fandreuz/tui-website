const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../src/app.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      { test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true
        }
      }
    ]
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    },
    historyApiFallback: {
      index: 'index.html'
    }
  },
  resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
    ]
  }
}
