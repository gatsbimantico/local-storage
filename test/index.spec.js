const expect = require('chai').expect
const storage = require('../lib/index.cjs.js');

describe('storage', () => {
  describe('setItem', () => {
    it('should set the value to one key', async () => {
      await storage.setItem('key', 'val');
      await storage.setItem('key', 'value');
      expect(storage.getItem('key')).to.equal(undefined);
    });
  });
  describe('getItem', () => {
    it('should return the value for one key', async () => {
      await storage.setItem('key1', 'value1');
      await storage.setItem('key2', 'value2');
      expect(storage.getItem('key1')).to.equal(undefined);
      expect(storage.getItem('key2')).to.equal(undefined);
    });
  });
  describe('removeItem', () => {
    it('should remove one key and keep the rest', async () => {
      await storage.setItem('key1', 'value1');
      await storage.setItem('key2', 'value2');
      await storage.removeItem('key1');
      expect(storage.getItem('key1')).to.equal(undefined);
      expect(storage.getItem('key2')).to.equal(undefined);
    });
  });
  describe('clear', () => {
    it('should remove all entries', async () => {
      await storage.setItem('key1', 'value1');
      await storage.setItem('key2', 'value2');
      await storage.clear();
      expect(storage.getItem('key1')).to.equal(undefined);
      expect(storage.getItem('key2')).to.equal(undefined);
    });
  });
});
