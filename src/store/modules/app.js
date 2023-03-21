import language from '../../plugins/i18n';
import { storageI18n } from '../../plugins/storage';

export default {
  state: {
    i18n: storageI18n.get(),
  },
  getters: {
    getI18n(state) {
      return state.i18n;
    },
  },
  mutations: {
    SET_LANG(state, value) {
      language.locale = value;
      state.i18n = value;
      storageI18n.set(value);
    },
  },
  actions: {
    setLang({ commit }, value) {
      commit('SET_LANG', value);
    },
  },
};
