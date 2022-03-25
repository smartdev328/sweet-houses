import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
// import HomeSwap from '../views/HomeSwap.vue'
import store from '../store/index'
Vue.use(VueRouter)


function requireAddress(to, from, next) {
  if (store.state.homeaddress) {
      next();
  } else {
   // next();
       next({
         name: 'Home'
       });
  }
  next();
}
const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import(/* webpackChunkName: "about" */ '../views/PrivacyPolicy.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.8,
        changefreq: 'daily',
      }
    }
  },
  {
    path: '/browse-home',
    name: 'BrowswHome',
    component: () => import(/* webpackChunkName: "about" */ '../views/BrowswHome.vue'),
    meta: {
      hideNavbar: true,
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.9,
        changefreq: 'daily',
      }
    }
  },
  {
    path: '/sold-data',
    name: 'HomesData',
    component:() => import('../views/HomesData.vue'),
    meta: {
      hideNavbar: true,
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.8,
        changefreq: 'daily',
      }
    }
  },
  {
    path: '/forsale-data',
    name: 'HomesData',
    component:() => import('../views/HomesData.vue'),
    meta: {
      hideNavbar: true,
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.8,
        changefreq: 'daily',
      }
    }
  },
  {
    path: '/terms-of-service',
    name: 'TermsofService',
    component: () => import(/* webpackChunkName: "about" */ '../views/TermsofService.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.8,
        changefreq: 'daily',
      }
    }

  },
  
  {
    path:'/home-swap',
    name:"HomeSwap",
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeSwap.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.9,
        changefreq: 'daily',
      }
    }
  },
  
  {
    path:'/sweet-sale',
    name:"SweetSale",
    component: () => import(/* webpackChunkName: "about" */ '../views/SweetSale.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.9,
        changefreq: 'daily',
      }
    }
  },
  {
    path:'/traditional-real-estate',
    name:"TraditionalRealestate",
    component: () => import(/* webpackChunkName: "about" */ '../views/TraditionalRealestate.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.9,
        changefreq: 'daily',
      }
    }
  },
  {
    path:'/swift-sale',
    name:"SwiftSale",
    component: () => import(/* webpackChunkName: "about" */ '../views/SwiftSale.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.9,
        changefreq: 'daily',
      }
    }
  },
  {
    path:'/swift-saleplus',
    name:"SwiftsalePlus",
    component: () => import(/* webpackChunkName: "about" */ '../views/SwiftsalePlus.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.9,
        changefreq: 'daily',
      }
    }
  },
  {
    path:'/appraisal',
    name:'appraisal',
    component: () => import ('../views/AppRise.vue'),
    meta: {
      hideNavbar: true,
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.9,
        changefreq: 'daily',
      }
     }
  },
  
  {
    path: '/cities',
    name: 'cities',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/Interfaces/Cities.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.5,
        changefreq: 'daily',
      }
    }
  },
  {
    path: '/cities-one',
    name: 'citiesone',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/Interfaces/CitiesOne.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.5,
        changefreq: 'daily',
      }
    }
  },
  {
    path: '/agents',
    name: 'OurTeam',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OurTeam.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.7,
        changefreq: 'daily',
      }
    }
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.8,
        changefreq: 'daily',
      }
    }
  },
  {
    path: '/for-realtor',
    name: 'ForRealtor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/Interfaces/ForRealtor.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.6,
        changefreq: 'daily',
      }
    }
  },
  {
    path: '/agent-profile/:name',
    name: 'AgentProfile',
    props:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/Interfaces/AgentProfile.vue'),
    meta: {
      sitemap: {
        slugs: [
          'my-amazing-article',
          'a-life-changing-method-for-folding-socks',

          // Slugs can have their own meta tags
          {
            title:     'a-very-important-article',
            priority:  0.7,
            lastmod:    'March 19, 2022',
            changefreq: 'daily',
          }
        ],
        lastmod:    'March 19, 2022',
        priority:    0.7,
        changefreq: 'daily',
      }
    }
  },
  {
    path: '/frequentlyaskedquestions',
    name: 'FrequentlyQuestion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/FrequentlyQuestion.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.8,
        changefreq: 'daily',
      }
    }
  },
  {
    path: '/about-us',
    name: 'Aboutus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.9,
        changefreq: 'daily',
      }
    }
  },
  {
    path: '/Whats-My-Home-Worth',
    name: 'HomeWorth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeWorth.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.7,
        changefreq: 'daily',
      }
    }
  },
  {
    path: '/',
    name: 'MapHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeMap.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    1,
        changefreq: 'daily',
      }
    }
  },
  {
    path:'/edit-address',
    name:'EditAddress',
    component : () => import('../components/base/EditAddress.vue'),
    meta: {
      hideNavbar: true,
     }
  },
  {
    path:'/confirm-address',
    name:'ConfirmAddress',
    component: () => import('../components/base/ConfirmAddress.vue'),
    beforeEnter: requireAddress,
    meta: {
      hideNavbar: true,
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.9,
        changefreq: 'daily',
      }
     }
    
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
  {
    path:'/home-details-forsale/:mls&:boardId',
    name:'HomeDetails',
    component:()=>import('../components/base/homes/HomeDetails.vue'),
    props:true,
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.9,
        changefreq: 'daily',
      }
    }
  },
  {
    path:'/home-details-sold/:mls&:boardId',
    name:'SoldHomeDetails',
    component:()=>import('../components/base/SoldHomedetails.vue'),
    props:true,
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.9,
        changefreq: 'daily',
      }
    }
  },
  {
    path:'/report-home',
    name:"RerportHome",
    component:()=>import('../views/ReportHome.vue'),
    meta: {
      sitemap: {
        lastmod:    'March 19, 2022',
        priority:    0.9,
        changefreq: 'daily',
      }
    }
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





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
