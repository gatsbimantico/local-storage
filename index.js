import AsyncLocalStorage from './impl/async-local-storage';
import CookieFallback from './impl/cookie-fallback';
import EmptyHandler from './impl/empty-handler';
import PrivateMemoryFallback from './impl/private-memory-fallback';

let isNode = false;
let isBrowser = false;
let isLocalStorageAvailable = false;

if (typeof window !== 'undefined') {
  isBrowser = true;

  try {
    if (window.localStorage) {
      window.localStorage.setItem('compatibility-test', 'works');
      window.localStorage.removeItem('compatibility-test');
      isLocalStorageAvailable = true;
    }
  } catch(e) {
    isLocalStorageAvailable = false;

    if (typeof window.document === 'undefined') {
      isBrowser = false;
    }
  }
}

if (
  !isBrowser && typeof process === 'object' &&
  typeof process.versions === 'object' && typeof process.versions.node !== 'undefined'
) {
  isNode = true;
}

/**
 * STORAGE
 * - in the browser and with localStorage available: returns an async localStorage
 * - in the browser without localStorage: fallbacks to cookies
 * - not in the browser: fallbacks to a private in memory global object
 */
let StorageConstructor;
if (isBrowser && isLocalStorageAvailable) {
  StorageConstructor = AsyncLocalStorage;
} else if (isBrowser) {
  StorageConstructor = CookieFallback;
} else if (isNode) {
  StorageConstructor = EmptyHandler;
} else {
  StorageConstructor = PrivateMemoryFallback;
}

export default new StorageConstructor();
