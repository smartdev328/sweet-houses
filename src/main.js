import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false
import {store} from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import Pagination from 'vue-pagination-2';
Vue.component('pagination', Pagination);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import LazyLoadDirective from "./directives/LazyLoadDirective";
Vue.directive("lazyload", LazyLoadDirective);

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




Vue.component('sweet-sale',require('./components/base/SweetSale.vue').default)
Vue.component('swift-sale',require('./components/base/SwiftSale.vue').default)
Vue.component('equity-advance',require('./components/base/EquityAdvance.vue').default)
Vue.component('traditional-realestate',require('./components/base/TraditionalRealestate.vue').default)

/* Edit Address Component */
Vue.component('home-info',require('./components/base/EditAddress/HomeInfo.vue').default)
Vue.component('contact-details',require('./components/base/EditAddress/ContactDetails.vue').default)
Vue.component('personalized-valuation',require('./components/base/EditAddress/PersonalizedValuation.vue').default)

/* Confirm Address component */
Vue.component('home-infoedit',require('./components/base/ConfirmAddress/HomeInfo.vue').default)
Vue.component('contact-detailsedit',require('./components/base/ConfirmAddress/ContactDetails.vue').default)
Vue.component('personalized-valuationedit',require('./components/base/ConfirmAddress/PersonalizedValuation.vue').default)


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
  render: h => h(App)
}).$mount('#app')
