import Vue from 'vue';
import VueI18n from 'vue-i18n';
import vnLanguage from './vn.json';
import enLanguage from './en.json';

Vue.use(VueI18n);

const messages = {
  en: enLanguage,
  vn: vnLanguage,
};

const i18n = new VueI18n({
  locale: 'vn', // set locale
  messages, // set locale messages
  fallbackLocale: 'vn',
});

export default i18n;
