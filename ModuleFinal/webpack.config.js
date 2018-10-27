const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
        util: './src/utility.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({ title: 'Output Management' }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            Styles: path.resolve(__dirname, 'assets/styles'),
            Images: path.resolve(__dirname, 'assets/images'),
            Data: path.resolve(__dirname, 'assets/data')
        }
    },
    optimization: {
        splitChunks: { chunks: 'all' }
    },
    module: { 
        rules: [ 
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: ['file-loader']
            }
        ]
    }
};