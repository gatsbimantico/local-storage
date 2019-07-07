export default class AsyncLocalStorage {
  async setItem(key, value) {
    return new Promise(res => {
      window.localStorage.setItem(key, value);
      res(true);
    });
  }

  async getItem(key) {
    return new Promise(res => {
      res(window.localStorage.getItem(key));
    });
  }

  async removeItem(key) {
    return new Promise(res => {
      window.localStorage.removeItem(key);
      res(true);
    });
  }

  async clear() {
    return new Promise(res => {
      window.localStorage.clear();
      res(true);
    });
  }
};
