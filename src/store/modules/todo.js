import api from '../../api/todo';

export default {
  state: {
    list: [],
  },
  getters: {
    getTodoList(state) {
      return state.list;
    },
    getTodoCount(state) {
      return state.list.length;
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
  },
  actions: {
    async TodoGetList({ commit }) {
      const result = await api.getList();

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
    TodoGetId() {

    },
  },
};
