// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';
import Vuetify from 'vuetify';
import VueNVD3 from 'vue-nvd3';
import VueNVD3Components from './components'
import 'vuetify/dist/vuetify.min.css';

Vue.use(VueNVD3);
Vue.use(VueNVD3Components);
Vue.use(Vuetify);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

const getters = {
  dialog () {
    return false;
  }
}

export default {
  getters
}
