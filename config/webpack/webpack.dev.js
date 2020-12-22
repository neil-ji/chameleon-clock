const webpack = require("webpack");
const merge = require("webpack-merge").merge;
const common = require("./webpack.common");
const devServerConfig = require("../dev_server").getDevServerConfig();

module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: devServerConfig,
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    stats: 'errors-warnings'
});