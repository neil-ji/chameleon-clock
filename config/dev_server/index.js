const { logger } = require("../util");

const log = (config) => {
    logger.logInfo(`webpack-dev-server is serve on port '${config.port}'`);

    if (config.compress) {
        logger.logInfo("use gzip for `module update` request.");
    }
    if (typeof config.before === "function") {
        logger.logInfo("mount custom app middleware before webpack-dev-server middleware mounted.");
    }
    if (typeof config.after === "function") {
        logger.logInfo("mount custom app middleware after webpack-dev-server middleware mounted.");
    }
}

exports.getDevServerConfig = () => {
    const devServerConfig = {
        port: 8888,

        // Enable gzip for `module update` request.
        compress: true,

        // Enable HMR
        hot: true,

        // webpack-dev-server will enable watch mode by default, hence , 
        // we should ignore some huge folders that never change.
        watchOptions: { ignored: /node_modules/ },
    }
    log(devServerConfig);
    return devServerConfig;
}