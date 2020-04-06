const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const config = {
  mode: 'development',
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),
  },
};

module.exports = merge(config, baseConfig);