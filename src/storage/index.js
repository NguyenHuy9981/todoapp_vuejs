const build = (name) => ({
  get() {
    return localStorage.getItem(name);
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
