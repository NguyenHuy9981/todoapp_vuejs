import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueExcelXlsx from 'vue-excel-xlsx';
import App from './App.vue';
import router from './router';
import store from './store';
import mixin from './mixin';
import i18n from './languages/i18n';

import './router/middleware';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueExcelXlsx);
Vue.use(mixin);
Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

export default app;
