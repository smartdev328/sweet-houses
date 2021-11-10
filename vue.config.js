module.exports = {
  configureWebpack: {
        splitChunks: {
            cacheGroups: {
                node_vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 1
                }
            }
        }
  }
}