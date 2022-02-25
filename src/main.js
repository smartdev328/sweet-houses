import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false

import {store} from './store'
import { BootstrapVue , IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
Vue.component('vueDropzone', vue2Dropzone);

export const eventBus = new Vue();

import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

import VueGoogleAutocomplete from 'vue-google-autocomplete'
Vue.component('vue-google-autocomplete',VueGoogleAutocomplete)

import VueSlider from 'vue-slider-component'
Vue.component('VueSlider', VueSlider);
import 'vue-slider-component/theme/antd.css'

Vue.component('vue-phone-number-input', VuePhoneNumberInput);
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import axios from 'axios'
const api = axios.create({
  baseURL: process.env.VUE_APP_URL_API,
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
  clientId: '413252505448-vlut2fe05l36avh14q2hvkpjovg70rl8.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile:false
}
Vue.use(GAuth, gauthOption)

import VueSocialSharing from 'vue-social-sharing'
Vue.use(VueSocialSharing);

import Pagination from 'vue-pagination-2';
Vue.component('pagination', Pagination);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import LazyLoadDirective from "./directives/LazyLoadDirective";
Vue.directive("lazyload", LazyLoadDirective);



// import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
// import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

// Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

//  "vue-ctk-date-time-picker": "^2.5.0",
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)



import Textra from 'vue-textra'

Vue.use(Textra);
/*share component*/ 
Vue.component('Navbar',require('./components/share/Navbar.vue').default)
/* Vue.component('ImageItem',require('./components/share/ImageItem.vue').default) */
Vue.component('Footer',require('./components/share/Footer.vue').default)
Vue.component('sale-question',require('./components/share/SaleQuestion.vue').default)





// Vue.component('sweet-sale',require('./components/base/SweetSale.vue').default)
const SwiftsalePage = () => import('./components/base/MainInterface/SwiftsalePage.vue');
Vue.component('swiftsale-page', SwiftsalePage)

const SweetsalePage = () => import('./components/base/MainInterface/SweetsalePage.vue');
Vue.component('sweetsale-page', SweetsalePage)

// const EquityAdvance = () => import('./components/base/MainInterface/EquityAdvance.vue');
// Vue.component('equity-advance', EquityAdvance)

const TraditionalRealestate = () => import('./views/TraditionalRealestate.vue');
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
Vue.component('verification-code',require('./components/share/Register/VerificationCode.vue').default)
Vue.component('forget-code',require('./components/share/Register/ForgetCode.vue').default)
Vue.component('reset-password',require('./components/share/Register/ResetPassword.vue').default)



Vue.component('address-map',require('./components/base/AddressMap.vue').default)
Vue.component('show-map',require('./components/base/ShowMap.vue').default)
Vue.component('show-list',require('./components/base/ShowList.vue').default)

const CardReport = () => import('./components/share/CardReport.vue');
Vue.component('card-report',CardReport);

const CardList = () => import('./components/share/CardList.vue');
Vue.component('card-list',CardList);

const HomemapSale = () => import('./components/share/HomemapSale');
Vue.component('homemap-sale',HomemapSale);

const ErrModel = () => import('./components/share/ErrModel.vue');
Vue.component('err-model',ErrModel);

const SoldSimilerhome = () => import('./components/share/SoldSimilerhome.vue');
Vue.component('sold-similerhome',SoldSimilerhome);


const AutocompleteMap = () => import('./components/share/AutocompleteMap.vue');
Vue.component('autocomplete-map',AutocompleteMap);
Vue.component('card-home',require('./components/share/CardHome.vue').default);
Vue.component('card-homereport',require('./components/share/CardHomereport.vue').default);

Vue.component('google-review',require('./components/share/GoogleReview.vue').default)
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBqme0IYqZWLPzvRdU7yTguMKMDVSdY6tI',
    libraries: 'places', 
  }
})

import vSelect from "vue-select";

Vue.component("v-select", vSelect);

import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})
new Vue({
  router,
  store,
  mounted() {

  },
  created(){
 
      this.$http.get('auth/user/',{headers:{
        'Authorization':`Token ${this.$store.state.token}` 
      }}).then(res =>{
        this.$store.state.user = res.data
  
      }) 
    
  },
  eventBus,
  render: h => h(App)
}).$mount('#app')
