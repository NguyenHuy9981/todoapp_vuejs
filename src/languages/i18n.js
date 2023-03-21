import Vue from 'vue';
import VueI18n from 'vue-i18n';
import vnLanguage from './vn.json';
import enLanguage from './en.json';
import { storageI18n } from '../storage';

Vue.use(VueI18n);

const messages = {
  en: enLanguage,
  vn: vnLanguage,
};

export default new VueI18n({
  locale: storageI18n.get(),
  messages,
  fallbackLocale: 'vn',
});
