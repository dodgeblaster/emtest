export class InMemoryDB {
  constructor() {
    this.data = new Map();
  }

  set(key, value) {
    this.data.set(key, value);
    return value;
  }

  get(key) {
    return this.data.get(key);
  }

  delete(key) {
    return this.data.delete(key);
  }

  has(key) {
    return this.data.has(key);
  }

  clear() {
    this.data.clear();
  }

  all() {
    return Array.from(this.data.entries()).map(([key, value]) => ({ key, value }));
  }
}
