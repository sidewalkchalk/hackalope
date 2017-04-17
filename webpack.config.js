const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.jpg$/, loader: 'ignore-loader' }
    ]
  }
  // plugins: [
  //       new webpack.optimize.UglifyJsPlugin({
  //           compress: {
  //               warnings: false
  //           }
  //       }),
  //       new UnminifiedWebpackPlugin()
  //   ]
}
