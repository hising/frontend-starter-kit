const merge = require("webpack-merge");
const webpackDevServerPort = 3000;

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
