import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false
import {store} from './store'
import { BootstrapVue , IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
export const eventBus = new Vue();
import axios from 'axios'
const api = axios.create({
  baseURL: 'https://35.182.224.125:8000/api/',
  headers: {
     /*  "x-rapidapi-key": "da7185aeb9msh0e13b327cf70bc8p10a2abjsn259d1f854d02",
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com" */
      }
})
Vue.prototype.$http = api
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
if(user){
  store.state.user = user
}
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '280245313331-9a9gr4kmfpougbbr1ln1juhdqljs6q2l.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile:true
}
Vue.use(GAuth, gauthOption)


import Pagination from 'vue-pagination-2';
Vue.component('pagination', Pagination);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import LazyLoadDirective from "./directives/LazyLoadDirective";
Vue.directive("lazyload", LazyLoadDirective);

import Notifications from 'vue-notification'
Vue.use(Notifications)
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

/*share component*/ 
Vue.component('Navbar',require('./components/share/Navbar.vue').default)
/* Vue.component('ImageItem',require('./components/share/ImageItem.vue').default) */
Vue.component('Footer',require('./components/share/Footer.vue').default)
Vue.component('sale-question',require('./components/share/SaleQuestion.vue').default)



const SweetSale = () => import('./components/base/SweetSale.vue');
Vue.component('sweet-sale', SweetSale)

const SwiftSale = () => import('./components/base/SwiftSale.vue');
Vue.component('swift-sale', SwiftSale)

const EquityAdvance = () => import('./components/base/EquityAdvance.vue');
Vue.component('equity-advance', EquityAdvance)

const TraditionalRealestate = () => import('./components/base/TraditionalRealestate.vue');
Vue.component('traditional-realestate', TraditionalRealestate)

/* Edit Address Component */
const HomeInfo = () => import('./components/base/EditAddress/HomeInfo.vue');
Vue.component('home-info', HomeInfo)

Vue.component('contact-details',require('./components/base/EditAddress/ContactDetails.vue').default)
Vue.component('personalized-valuation',require('./components/base/EditAddress/PersonalizedValuation.vue').default)

/* Confirm Address component */
Vue.component('home-infoedit',require('./components/base/ConfirmAddress/HomeInfo.vue').default)
Vue.component('contact-detailsedit',require('./components/base/ConfirmAddress/ContactDetails.vue').default)
Vue.component('personalized-valuationedit',require('./components/base/ConfirmAddress/PersonalizedValuation.vue').default)

/*registration */ 
Vue.component('sign-up',require('./components/share/Register/SignUp.vue').default)
Vue.component('log-in',require('./components/share/Register/LogIn.vue').default)
Vue.component('address-map',require('./components/base/AddressMap.vue').default)
Vue.component('show-map',require('./components/base/ShowMap.vue').default)
Vue.component('show-list',require('./components/base/ShowList.vue').default)

Vue.component('card-home',require('./components/share/CardHome.vue').default)
Vue.component('google-review',require('./components/share/GoogleReview.vue').default)
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBcU3Q8AzxVuwdri3eEWOlVdVqFSeLtT60',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  }
})

new Vue({
  router,
  store,

  created(){
 
      this.$http.get('user/',{headers:{
        'Authorization':`Token ${this.$store.state.token}` 
      }}).then(res =>{
        this.$store.state.user = res.data
  
      }) 
    
  },
  eventBus,
  render: h => h(App)
}).$mount('#app')
