const merge = require('webpack-merge'); // Merge config.
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3000,
    publicPath: '/assets/',
    hotOnly: true,
    overlay: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
});
