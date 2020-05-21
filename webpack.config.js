const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, 'assets/'),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devServer: {
    host: "localhost",
    port: 3000,
    publicPath: "/assets/",
    hotOnly: true,
    overlay: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};