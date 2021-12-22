const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    port: 3000,
    hot: true,
    client: {
      logging: 'verbose',
      overlay: true
    },
    static: [{
      directory: path.join(__dirname, ''),
      publicPath: '/'
    }],
    devMiddleware: {
      index: false,
      publicPath: '/assets',
      writeToDisk: true
    }
  }
});
