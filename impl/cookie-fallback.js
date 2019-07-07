function getLSCookie() {
  const value = document.cookie.match(/__ls-db=(.*)LS_END/);
  return (value && value[1]) ? JSON.parse(decodeURIComponent(value[1])) : {};
}

function setLSCookie(db, exdays = 7) {
  const date = new Date();
  date.setTime(date.getTime() + (exdays * 864e5));
  document.cookie = `__ls-db=${encodeURIComponent(JSON.stringify(db))}LS_END; expires=${date.toUTCString()}; path=/`;
}

export default class CookieFallback {
  constructor({
    cookieExpirationDays = 7,
  }) {
    this.exdays = cookieExpirationDays;
  }

  async setItem(key, value) {
    return new Promise(res => {
      const db = getLSCookie();
      db[key] = value;
      setLSCookie(db, this.exdays);
      res(true);
    });
  }

  getItem(key) {
    return getLSCookie()[key];
  }

  async removeItem(key) {
    return new Promise(res => {
      const db = getLSCookie();
      delete db[key];
      setLSCookie(db, this.exdays);
      res(true);
    });
  }

  async clear() {
    return new Promise(res => {
      const date = new Date(0);
      document.cookie = `__ls-db=; expires=${date.toUTCString()}; path=/`;
    });
  }
};
