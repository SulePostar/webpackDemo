const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');

module.exports = merge(
    baseConfig, 
    {
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './dist',
            hot: true
        }
    }
);