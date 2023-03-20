import store from './store';
import filter from './filter';

export default {
  install(Vue) {
    Vue.mixin(store);
    Vue.mixin(filter);
  },
};
