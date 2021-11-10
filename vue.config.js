  module.exports = {
    configureWebpack: {
        performance: {
            hints: "warning", // enum
            maxAssetSize: 4048576, // int (in bytes),
            maxEntrypointSize: 4048576, // int (in bytes)
        }
    }
}