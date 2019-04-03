const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpackDevServerPort = 3000;

const config = {
    entry: [
        `webpack-dev-server/client?http://localhost:${webpackDevServerPort}`,
        "webpack/hot/only-dev-server",
        "./src/index.ts"
    ],
    output: {
        filename: "[name].js",
        path: path.resolve("dist")
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: "babel-loader"},
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    {loader: "css-loader", options: {importLoaders: 1}},
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        port: webpackDevServerPort,
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        contentBase: path.join(__dirname, "dist"),
        compress: true
    }
};

module.exports = config;
