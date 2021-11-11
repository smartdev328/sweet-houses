  module.exports = {
    configureWebpack: {
        performance: {
            hints: false, // enum
            maxAssetSize: 250000, // int (in bytes),
            maxEntrypointSize: 250000, // int (in bytes)
        }
    }
}