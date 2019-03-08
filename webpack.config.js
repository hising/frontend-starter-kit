const merge = require("webpack-merge");
const commonConfig = {};
const config = (env, argv) => {
    const webpackConfig =
        argv.mode === "development" ? "development" : "production";
    const envWebpackConfig = require(`./webpack.config.${webpackConfig}`);
    return merge.smart(commonConfig, envWebpackConfig);
};

module.exports = config;
