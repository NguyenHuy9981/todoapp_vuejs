import api from '../../api/todo';

export default {
  state: {
    list: [],
    filter: {

    },
    option: {
      status: [
        {
          value: 'unfulfilled',
          text: 'unfulfilled',
        },
        {
          value: 'processing',
          text: 'processing',
        },
        {
          value: 'done',
          text: 'done',
        },
      ],
    },
  },
  getters: {
    getTodoList(state) {
      return state.list;
    },
    getTodoCount(state) {
      return state.list.length;
    },
    getTodoStatus(state) {
      return state.option.status;
    },
  },
  mutations: {
    SET_LIST(state, list) {
      state.list = list;
    },
    DELETE_JOB(state, id) {
      state.list = state.list.filter((job) => job._id !== id);
    },
    CREATE_JOB(state, newJob) {
      state.list.unshift(newJob);
    },
    UPDATE_JOB(state, { id, update }) {
      const jobIndex = state.list.findIndex((item) => item._id === id);
      if (jobIndex !== -1) {
        state.list[jobIndex] = {
          ...state[jobIndex],
          ...update,
        };
      }
    },
    SET_FILTER(state, filter) {
      state.filter = filter;
    },
    SET_SEARCH(state, search) {
      state.filter = search;
    },
  },
  actions: {
    async TodoGetList({ commit, state }) {
      const result = await api.getList(state.filter);

      if (result.success) {
        commit('SET_LIST', result.data);
      }
      return result;
    },
    async TodoDelete({ commit }, id) {
      const result = await api.delete(id);

      if (result.success) {
        commit('DELETE_JOB', id);
      }
      return result;
    },
    async TodoCreate({ commit }, data) {
      const result = await api.create(data);
      if (result.success) {
        commit('CREATE_JOB', result.data);
      }
      return result;
    },
    async TodoUpdate({ commit }, { id, update }) {
      const result = await api.update(id, update);
      if (result.success) {
        commit('UPDATE_JOB', {
          id,
          update,
        });
      }
      return result;
    },
    async TodoFilter({ commit, dispatch }, data) {
      commit('SET_FILTER', data);

      return dispatch('TodoGetList');
    },

    async TodoSearch({ commit, dispatch }, data) {
      commit('SET_SEARCH', data);

      return dispatch('TodoGetList');
    },
    TodoGetId() {

    },
  },
};
