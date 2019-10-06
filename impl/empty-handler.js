export default class EmptyHandler {
  async setItem(key, value) {
    return new Promise(res => res(true));
  }

  getItem(key) {
    return !key || undefined;
  }

  async removeItem(key) {
    return new Promise(res => res(true));
  }

  async clear() {
    return new Promise(res => res(true));
  }
};
