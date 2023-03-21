const build = (name, defaultVal = '') => ({
  get() {
    return localStorage.getItem(name) || defaultVal;
  },
  set(value) {
    return localStorage.setItem(name, value);
  },
  remove() {
    return localStorage.removeItem(name);
  },
});

export const storageToken = build('token');

export const storageUserId = build('userId');

export const storageI18n = build('i18n', 'vn');
