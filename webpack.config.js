const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpackDevServerPort = 3000;
const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    output: {
        path: path.resolve("dist"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: "babel-loader"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};

module.exports = (env, argv) => {
    const devMode = argv.mode === "development";
    config.entry =
        devMode
            ? [
                  `webpack-dev-server/client?http://localhost:${webpackDevServerPort}`,
                  "webpack/hot/only-dev-server",
                  "./src/index.ts"
              ]
            : ["./src/index.ts"];

    if (devMode) {
        config.devServer = {
            port: webpackDevServerPort,
            hot: true,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            contentBase: path.join(__dirname, "dist"),
            compress: true
        };
    } else {

        let pathsToClean = [
            'dist',
        ];

        let cleanOptions = {
            root:     '',
            exclude:  [],
            verbose:  true,
            dry:      false
        };

        config.plugins.push(
            new CleanWebpackPlugin(pathsToClean, cleanOptions),
            new webpack.optimize.ModuleConcatenationPlugin(),
        );
        config.optimization = {
            minimize: !devMode,
            minimizer: [new TerserPlugin({
                terserOptions: {
                    parse: {
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                    parallel: true,
                    cache: true,
                }
            })],
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        }
    }

    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: devMode ? "[name].css" : "[name].[hash].css",
            chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
        })
    );

    config.module.rules.push(
        {
            test: /\.s?css$/,
            use: [
                devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }
    );


    return config;
};
