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
  async deleteComment(commentId) {
    return api.delete(`${router}/comment/${commentId}`);
  },
  async listComment(id) {
    return api.get(`${router}/comment/${id}`);
  },
  async uploadFile(formData) {
    return api.post(`${router}/file/create`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  async addFile(id, fileRef) {
    return api.put(`${router}/addFile/${id}`, {
      fileRef,
    });
  },
  async getfile(id) {
    return api.get(`${router}/file/${id}`);
  },
};
