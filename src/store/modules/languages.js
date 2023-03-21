import language from '../../languages/i18n';

export default {

  mutations: {
    SET_LANG(state, payload) {
      language.locale = payload;
    },
  },
  actions: {
    setLang({ commit }, payload) {
      commit('SET_LANG', payload);
    },
  },
};
