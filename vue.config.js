const { routes } = require('./src/routes.js');
module.exports = {
  configureWebpack:{
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  },
  pluginOptions: {
    sitemap: {
      baseURL: 'https://sweetly.ca/',
      routes,
    }
  }
}