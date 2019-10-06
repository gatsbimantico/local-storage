export default class PrivateMemoryFallback {
  constructor() {
    this.internalLocalStorage = {};
  }

  async setItem(key, value) {
    return new Promise(res => {
      this.internalLocalStorage[key] = value;
      res(true);
    });
  }

  getItem(key) {
    return this.internalLocalStorage[key];
  }

  async removeItem(key) {
    return new Promise(res => {
      delete this.internalLocalStorage[key];
      res(true);
    });
  }

  async clear() {
    return new Promise(res => {
      this.internalLocalStorage = {};
      res(true);
    });
  }
};
