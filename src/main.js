import Vue from 'vue';
import VueExcelXlsx from 'vue-excel-xlsx';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import mixin from './mixin';
import i18n from './plugins/i18n';
import uiI18n from './languages/elementui';
import 'element-ui/lib/theme-chalk/index.css';
import 'tailwindcss/dist/tailwind.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import './router/middleware';

Vue.use(ElementUI, { locale: uiI18n });
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
