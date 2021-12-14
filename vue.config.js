
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
.BundleAnalyzerPlugin;
module.exports = {
    configureWebpack:{
      plugins: [new BundleAnalyzerPlugin()],
      optimization: {
        splitChunks: {
          minSize: 10000,
          maxSize: 250000,
        }
      }
    },
    
  }