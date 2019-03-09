const merge = require("webpack-merge");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const WebpackMonitor = require("webpack-monitor");
const commonConfig = {};
const ENV_DEVELOPMENT = "development";
const ENV_PRODUCTION = "production";
const config = (env, argv) => {
    const webpackConfig =
        argv.mode === ENV_DEVELOPMENT ? ENV_DEVELOPMENT : ENV_PRODUCTION;

    const analyzeWebpackBuild =
        env && env.hasOwnProperty("DEBUG") ? Boolean(env.DEBUG) : false;

    const envWebpackConfig = require(`./webpack.config.${webpackConfig}`);

    if (analyzeWebpackBuild) {
        envWebpackConfig.plugins.push(new BundleAnalyzerPlugin());
        envWebpackConfig.plugins.push(
            new WebpackMonitor({
                capture: true,
                launch: true
            })
        );
    }
    return merge.smart(commonConfig, envWebpackConfig);
};

module.exports = config;
