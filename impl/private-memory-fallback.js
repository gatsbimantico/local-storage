let internalLocalStorage = {};

export default class PrivateMemoryFallback {
  async setItem(key, value) {
    return new Promise(res => {
      internalLocalStorage[key] = value;
      res(true);
    });
  }

  async getItem(key) {
    return new Promise(res => {
      res(internalLocalStorage[key]);
    });
  }

  async removeItem(key) {
    return new Promise(res => {
      delete internalLocalStorage[key];
      res(true);
    });
  }

  async clear() {
    return new Promise(res => {
      internalLocalStorage = {};
      res(true);
    });
  }
};
