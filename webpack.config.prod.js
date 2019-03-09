const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackDevServerPort = 3000;

let pathsToClean = [
    'dist',
];

let cleanOptions = {
    root:     '',
    exclude:  [],
    verbose:  true,
    dry:      false
};

module.exports = {
    entry: [
        `webpack-dev-server/client?http://localhost:${webpackDevServerPort}`,
        "webpack/hot/only-dev-server",
        "./src/index.ts"
    ],
    devServer: {
        port: webpackDevServerPort,
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        contentBase: path.join(__dirname, "dist"),
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
};
