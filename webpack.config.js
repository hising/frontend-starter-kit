const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpackDevServerPort = 3000;

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: [
        `webpack-dev-server/client?http://localhost:${webpackDevServerPort}`,
        'webpack/hot/only-dev-server',
        './src/index.ts'
    ],
    output: {
        path: path.resolve('dist'),
        filename: '[name].js'
    },
    devtool: '',
    devServer: {
        port: webpackDevServerPort,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [{test: /\.tsx?$/, loader: 'ts-loader'}]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './resources/index.html'
        })
    ]
};
