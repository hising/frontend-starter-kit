const HtmlWebpackPlugin = require("html-webpack-plugin");
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
            {test: /\.tsx?$/, loader: "babel-loader"},
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};

module.exports = (env, argv) => {
    config.entry =
        argv.mode === "development"
            ? [
                  `webpack-dev-server/client?http://localhost:${webpackDevServerPort}`,
                  "webpack/hot/only-dev-server",
                  "./src/index.ts"
              ]
            : ["./src/index.ts"];

    if (argv.mode === "development") {
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
    return config;
};
