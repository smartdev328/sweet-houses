

// const SitemapPlugin = require('sitemap-webpack-plugin').default;
const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/privacy-policy',
        lastmod:   new Date().toISOString().slice(0,10),
        priority:    0.8,
        changefreq: 'daily',
  },
  {
    path: '/browse-home',

        lastmod: new Date().toISOString().slice(0,10),
        priority:    0.9,
        changefreq: 'daily',
  },
  {
    path: '/sold-data',
        lastmod:   new Date().toISOString().slice(0,10),
        priority:    0.8,
    changefreq: 'daily',


  },
  {
    path: '/forsale-data',
        lastmod:   new Date().toISOString().slice(0,10),
        priority:    0.8,
        changefreq: 'daily',

  },
  {
    path: '/terms-of-service',

        lastmod:   new Date().toISOString().slice(0,10),
        priority:    0.8,
        changefreq: 'daily',

  },

  {
    path:'/home-swap',
        lastmod:   new Date().toISOString().slice(0,10),
        priority:    0.9,
        changefreq: 'daily',
  },

  {
    path:'/sweet-sale',
        lastmod:   new Date().toISOString().slice(0,10),
        priority:    0.9,
        changefreq: 'daily',
  },
  {
    path:'/traditional-real-estate',
        lastmod:   new Date().toISOString().slice(0,10),
        priority:    0.9,
        changefreq: 'daily',
  },
  {
    path:'/swift-sale',
        lastmod:    new Date().toISOString().slice(0,10),
        priority:    0.9,
        changefreq: 'daily',
  },
  {
    path:'/swift-saleplus',
        lastmod:  new Date().toISOString().slice(0,10),
        priority:    0.9,
        changefreq: 'daily',
  },
  {
    path:'/equity-advance',
        lastmod:  new Date().toISOString().slice(0,10),
        priority:    0.8,
        changefreq: 'daily',
  },
  {
    path:'/appraisal',
        lastmod:  new Date().toISOString().slice(0,10),
        priority:    0.9,
        changefreq: 'daily',

  },

  {
    path: '/cities',
        lastmod:   new Date().toISOString().slice(0,10),
        priority:    0.5,
        changefreq: 'daily',
  },
  {
    path: '/cities-one',
        lastmod:  new Date().toISOString().slice(0,10),
        priority:    0.5,
        changefreq: 'daily',
  },
  {
    path: '/agents',
        lastmod:  new Date().toISOString().slice(0,10),
        priority:    0.7,
        changefreq: 'daily',
  },
  {
    path: '/contact-us',
        lastmod:  new Date().toISOString().slice(0,10),
        priority:    0.8,
        changefreq: 'daily',

  },
  {
    path: '/for-realtor',
        lastmod:  new Date().toISOString().slice(0,10),
        priority:    0.6,
        changefreq: 'daily',
  },
  // {
  //   path: '/agent-profile/:name',
  //
  //             lastmod:   new Date().toISOString().slice(0,10),
  //             priority:    0.7,
  //             changefreq: 'daily',
  //     slugs:""
  //
  //
  // },
  {
    path: '/frequentlyaskedquestions',
        lastmod:   new Date().toISOString().slice(0,10),
        priority:    0.8,
        changefreq: 'daily',

  },
  {
    path: '/about-us',
        lastmod:   new Date().toISOString().slice(0,10),
        priority:    0.9,
        changefreq: 'daily',

  },
  {
    path: '/blog-details',

        lastmod: new Date().toISOString().slice(0,10),
        priority:    0.7,
        changefreq: 'daily',
  },
  {
    path: '/blog',
        lastmod:    new Date().toISOString().slice(0,10),
        priority:    0.7,
        changefreq: 'daily',

  },
  {
    path: '/Whats-My-Home-Worth',

        lastmod:   new Date().toISOString().slice(0,10),
        priority:    0.7,
        changefreq: 'daily',

  },
  {
    path: '/',

        lastmod:   new Date().toISOString().slice(0,10),
        priority:    1,
        changefreq: 'daily',

  },

  {
    path:'/confirm-address',
        lastmod:    new Date().toISOString().slice(0,10),
        priority:    0.9,
        changefreq: 'daily',


  },
  {
    path:'/NotAvailable',
    name:'NotAvailable',
    component:()=> import('../components/base/NotAvailable.vue')
  },
  {
    path:'/SuceessMsg',
    name:'SuceessMsg',
    component:()=>import('../components/base/Interfaces/SuceessMsg.vue')
  },
  // {
  //   path:'/home-details-forsale/:mls&:boardId',
  //
  //        lastmod: new Date().toISOString().slice(0,10),
  //       priority:    0.9,
  //       changefreq: 'daily',
  //
  // },
  // {
  //   path:'/home-details-sold/:mls&:boardId',
  //   lastmod: new Date().toISOString().slice(0,10),
  //       priority:    0.9,
  //       changefreq: 'daily',
  //     slugs:""
  //
  // },
  {
    path:'/report-home',
    lastmod: new Date().toISOString().slice(0,10),
        priority:    0.9,
        changefreq: 'daily',

  },
  {
    path:'/saved',
    name:'Saved',
    component:()=>import('../components/base/SavedListings.vue')
  },
  {
    path:'/edithomeinfo',
    name:'EditHomeInof',
    component:()=>import('../components/base/EditHomeinfo.vue')
  }





]
module.exports = {
  pluginOptions: {
    sitemap: {
      baseURL: 'https://sweetly.ca',
      routes,
    }
  },
  configureWebpack:{
    // plugins: [
    //   new SitemapPlugin('https://sweetly.ca/', routes, {
    //     filename: 'sitemap.xml',
    //     lastmod: true,
    //     changefreq: 'hourly',
    //     priority: '0.8'
    //   })
    // ],
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    },
  //   plugins: [
  //     new SitemapPlugin({ base:'https://sweetly.ca/', routes })
  // ]
  },
  // pluginOptions: {
  //   sitemap: {
  //     baseURL: 'https://sweetly.ca/',
  //     routes,
  //   }
  // }
}