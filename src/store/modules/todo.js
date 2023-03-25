import api from '../../api/todo';
import i18n from '../../plugins/i18n';

const listStatus = [
  {
    value: 'unfulfilled',
    text: i18n.t('UNFULFILLED'),
  },
  {
    value: 'processing',
    text: i18n.t('PROCESSING'),
  },
  {
    value: 'done',
    text: i18n.t('DONE'),
  },
];

export default {
  state: {
    list: [],
    listComment: [],
    job: {},
    filter: {

    },
    pagging: {
      page: 0,
      limit: 0,
      total: 0,
    },
    option: {
      status: listStatus,
      limit: [5, 10, 50, 100].map((value) => {
        return {
          value,
          text: value,
        };
      }),
    },
    listFile: [],
    listTab: [
      {
        value: 'all',
        text: i18n.t('ALL'),
        count: 0,
      },
      ...listStatus.map((status) => {
        return {
          ...status,
          count: 0,
        };
      }),
    ],
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
    getTodoLimit(state) {
      return state.option.limit;
    },
    getTodoDetail(state) {
      return state.job;
    },
    getTodoPagging(state) {
      return state.pagging;
    },
    getCommentList(state) {
      return state.listComment;
    },
    getListTab(state) {
      return state.listTab;
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
      let job = state.list.find((item) => item._id === id);

      if (job) {
        job = Object.assign(job, update);
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
    DELETE_FILE(state, id) {
      state.listFile = state.listFile.filter((file) => file._id !== id);
    },
    RESET_PAGGING(state) {
      state.pagging.page = 1;
    },
    SET_PAGGING(state, { page, limit }) {
      state.pagging.page = page;
      state.pagging.limit = limit;
    },
    SET_TOTAL(state, total) {
      state.pagging.total = total;
    },
    UPDATE_TAB(state, data) {
      data.forEach((item) => {
        const tab = state.listTab.find((tabItem) => tabItem.value === item._id);
        if (tab) {
          tab.count = item.count;
        }
      });
    },
  },
  actions: {
    async TodoGetList({ commit, state }) {
      const result = await api.getList(state.filter, state.pagging.page, state.pagging.limit);

      if (result.success) {
        commit('SET_LIST', result.data);
        commit('SET_TOTAL', result.total);
      }
      return result;
    },
    async TodoChangePage({ commit }, pagging) {
      commit('SET_PAGGING', pagging);
      return pagging;
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
      commit('RESET_PAGGING', data);

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
    async TodoRemoveFile({ }, { id, fileRef }) {
      const result = await api.removeFile(id, fileRef);

      return result;
    },
    async TodoAddFile({ }, { id, fileRef }) {
      const result = await api.addFile(id, fileRef);
      return result;
    },
    async TodoTab({ commit }) {
      const result = await api.stats();
      commit('UPDATE_TAB', result.data);
      return result;
    },
  },
};
