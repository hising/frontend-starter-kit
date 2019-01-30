const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpackDevServerPort = 3000;

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
