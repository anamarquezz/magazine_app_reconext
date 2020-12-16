import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VuePageTransition from 'vue-page-transition'
import $ from 'jquery';
import Flipbook from 'flipbook-vue'

Vue.use(VuePageTransition)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,

  render: function (h) { return h(App) }
}).$mount('#app')
