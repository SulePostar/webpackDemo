const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

const globalVariables = new webpack.DefinePlugin({
  GLOBALS: {
    title: JSON.stringify('Asset Monitoring Operations Center'),
    showButton: false,
  }
});

module.exports = merge(baseConfig, {
  plugins: [globalVariables],
});