import api from '../../api/todo';

export default {
  state: {
    list: [],
    listComment: [],
    job: {},
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
    listFile: [],
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
    getTodoDetail(state) {
      return state.job;
    },
    getCommentList(state) {
      return state.listComment;
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
      const job = state.list.find((item) => item._id === id);
      if (job) {
        Object.entries(update).forEach((entry) => {
          const [key, value] = entry;
          job[key] = value;
        });
      }
    },
    SET_FILTER(state, filter) {
      state.filter = filter;
    },
    SET_SEARCH(state, search) {
      state.filter = search;
    },
    SET_JOB(state, job) {
      state.job = job;
    },
    SET_COMMENT(state, listComment) {
      state.listComment = listComment;
    },
    CREATE_COMMENT(state, newComment) {
      state.listComment.unshift(newComment);
    },
    DELETE_COMMENT(state, id) {
      state.listComment = state.listComment.filter((comment) => comment._id !== id);
    },
    SET_FILE(state, listFile) {
      state.listFile = listFile;
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
          update: {
            ...update,
            ...result.data,
          },
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
    async TodoGetId({ commit }, id) {
      const result = await api.detail(id);
      if (result.success) {
        commit('SET_JOB', result.data);
      }

      return result;
    },
    async TodoCreateComment({ commit }, { jobId, data }) {
      const result = await api.createComment(jobId, data);
      if (result.success) {
        commit('CREATE_COMMENT', result.data);
      }
      return result.data;
    },
    async TodoDeleteComment({ commit }, commentId) {
      const result = await api.deleteComment(commentId);
      if (result.success) {
        commit('DELETE_COMMENT', commentId);
      }
      return result.data;
    },
    async TodoListComment({ commit }, jobId) {
      const result = await api.listComment(jobId);
      if (result.success) {
        commit('SET_COMMENT', result.data);
      }

      return result.data;
    },
    async TodoUploadFile({ }, formData) {
      const result = await api.uploadFile(formData);
      return result;
    },
    async TodoAddFile({ }, { id, fileRef }) {
      const result = await api.addFile(id, fileRef);
      return result;
    },
  },
};
