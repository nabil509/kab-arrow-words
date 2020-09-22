const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    publicPath: '/assets/',
    hotOnly: true,
    overlay: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
});
