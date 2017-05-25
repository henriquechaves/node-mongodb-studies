'use strict';

const path = require('path');
const webpack = require('webpack');
const validator = require('webpack-validator');

module.exports = {
  output: {
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      'client',
      'server',
      'node_modules',
    ],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  },
};
