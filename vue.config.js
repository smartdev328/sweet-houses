  module.exports = {
    configureWebpack: {
        performance: {
            hints: "warning", // enum
            maxAssetSize: 44048576, // int (in bytes),
            maxEntrypointSize: 44048576, // int (in bytes)
        }
    }
}