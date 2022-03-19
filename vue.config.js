
// const { routes } = require('./src/router/index');
module.exports = {
  configureWebpack:{
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  },
  // pluginOptions: {
  //   sitemap: {
  //     baseURL: 'https://sweetly.ca/',
  //     routes,
  //   }
  // }
}