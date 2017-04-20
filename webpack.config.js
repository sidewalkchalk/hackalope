const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './client/index.jsx'],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  }
}
