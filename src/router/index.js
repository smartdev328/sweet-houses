import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'
Vue.use(VueRouter)


function lazyLoad(view){
  return() => import(`../components/base/${view}.vue`)
}

function requireAddress(to, from, next) {
  if (store.state.homeaddress) {
      next();
  } else {
      next({
        name: 'Home'
      });
  }
  next();
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cities',
    name: 'cities',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: lazyLoad('Cities')
    //component: () => import(/* webpackChunkName: "about" */ '../components/base/Cities.vue')
  },
  {
    path: '/cities-one',
    name: 'citiesone',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/CitiesOne.vue')
  },
  {
    path: '/agents',
    name: 'OurTeam',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/OurTeam.vue')
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/ContactUs.vue')
  },
  {
    path: '/for-realtor',
    name: 'ForRealtor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/ForRealtor.vue')
  },
  {
    path: '/agent-profile/:name',
    name: 'AgentProfile',
    props:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/AgentProfile.vue')
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
    component: () => import(/* webpackChunkName: "about" */ '../components/base/AboutUs.vue')
  },
  {
    path: '/blog-details',
    name: 'BlogDetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/BlogDetails.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/Blog.vue')
  },
  {
    path: '/Whats-My-Home-Worth',
    name: 'HomeWorth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/base/HomeWorth.vue')
  },
  {
    path: '/maphome',
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
    component:()=>import('../components/base/SuceessMsg.vue')
  },
  {
    path:'/home-details',
    name:'HomeDetails',
    component:()=>import('../components/base/HomeDetails.vue')
  }
  
  
  
  

]





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
