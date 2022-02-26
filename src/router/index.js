import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import HomeSwap from '../views/HomeSwap.vue'
import BrowswHome from '../views/BrowswHome.vue'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/PrivacyPolicy.vue')
  },
  {
    path: '/browse-home',
    name: 'BrowswHome',
    component:BrowswHome
  },
  {
    path: '/terms-of-service',
    name: 'TermsofService',
    component: () => import(/* webpackChunkName: "about" */ '../views/TermsofService.vue')
  },
  
  {
    path:'/home-swap',
    name:"HomeSwap",
    component:HomeSwap
  },
  
  {
    path:'/sweet-sale',
    name:"SweetSale",
    component: () => import(/* webpackChunkName: "about" */ '../views/SweetSale.vue')
  },
  {
    path:'/traditional-real-estate',
    name:"TraditionalRealestate",
    component: () => import(/* webpackChunkName: "about" */ '../views/TraditionalRealestate.vue')
  },
  {
    path:'/swift-sale',
    name:"SwiftSale",
    component: () => import(/* webpackChunkName: "about" */ '../views/SwiftSale.vue')
  },
  {
    path:'/swift-saleplus',
    name:"SwiftsalePlus",
    component: () => import(/* webpackChunkName: "about" */ '../views/SwiftsalePlus.vue')
  },
  {
    path:'/equity-advance',
    name:'EquityAdvance',
    component: () => import ('../views/EquityAdvance.vue')
  },
  {
    path: '/cities',
    name: 'cities',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/Interfaces/Cities.vue')
  },
  {
    path: '/cities-one',
    name: 'citiesone',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/Interfaces/CitiesOne.vue')
  },
  {
    path: '/agents',
    name: 'OurTeam',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/Interfaces/OurTeam.vue')
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/Interfaces/ContactUs.vue')
  },
  {
    path: '/for-realtor',
    name: 'ForRealtor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/Interfaces/ForRealtor.vue')
  },
  {
    path: '/agent-profile/:name',
    name: 'AgentProfile',
    props:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/Interfaces/AgentProfile.vue')
  },
  {
    path: '/frequentlyaskedquestions',
    name: 'FrequentlyQuestion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/FrequentlyQuestion.vue')
  },
  {
    path: '/about-us',
    name: 'Aboutus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/Interfaces/AboutUs.vue')
  },
  {
    path: '/blog-details',
    name: 'BlogDetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/Interfaces/BlogDetails.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/Interfaces/Blog.vue')
  },
  {
    path: '/Whats-My-Home-Worth',
    name: 'HomeWorth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeWorth.vue')
  },
  {
    path: '/',
    name: 'MapHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeMap.vue')
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
      hideNavbar: true
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
    props:true
  },
  {
    path:'/home-details-sold/:mls&:boardId',
    name:'SoldHomeDetails',
    component:()=>import('../components/base/SoldHomedetails.vue'),
    props:true
  },
  {
    path:'/report-home',
    name:"RerportHome",
    component:()=>import('../components/base/ReportHome.vue')
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
