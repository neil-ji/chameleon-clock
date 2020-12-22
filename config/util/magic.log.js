const colors = require("colors");

const logInfo = (msg, msgStyle) => {
    const builtInStyle = `${colors.blue("%s")} ${colors.gray("\[%s\]")}%s ${msgStyle || ""}`;
    console.log(builtInStyle, "i", "magic-blog", ":", msg);
}

const logError = (error, errorStyle) => {
    const builtInStyle = `${colors.red("%s")} ${colors.gray("\[%s\]")}%s ${errorStyle || ""}`;
    console.log(builtInStyle, "error", "magic-blog", ":", error);
}

module.exports = {
    logInfo,
    logError,
}