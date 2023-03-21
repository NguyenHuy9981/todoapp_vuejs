import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '../languages';
import { storageI18n } from './storage';

Vue.use(VueI18n);

export default new VueI18n({
  locale: storageI18n.get(),
  messages,
  fallbackLocale: 'vn',
});
