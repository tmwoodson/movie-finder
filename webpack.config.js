const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  context: __dirname + '/app',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            "es2015",
            "react",
            "stage-0"
          ]
        }
      }
    ]
  }
};
