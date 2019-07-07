import '../lib/index.umd.js';
import './example.umd.js';

const storage = window['local-storage'];
const example = window['example'];

example(storage);
