import api from './base';

const router = '/todo';

export default {
  async getList(opts = { }) {
    return api.get(router, {
      params: opts,
    });
  },
  async create(data) {
    return api.post(`${router}/create`, data);
  },
  async update(id, data) {
    return api.put(`${router}/${id}`, data);
  },
  async delete(id) {
    return api.delete(`${router}/${id}`);
  },
  async detail(id) {
    return api.get(`${router}/${id}`);
  },
  async createComment(jobId, data) {
    return api.post(`${router}/comment/create`, {
      jobId,
      ...data,
    });
  },
  async listComment(id) {
    return api.get(`${router}/comment/${id}`);
  },

  // async deleteComment(id) {

  // },
};
