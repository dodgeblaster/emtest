export function createDB() {
  const data = new Map();

  return {
    set(key, value) {
      data.set(key, value);
      return value;
    },
    get(key) {
      return data.get(key);
    },
    delete(key) {
      return data.delete(key);
    },
    has(key) {
      return data.has(key);
    },
    clear() {
      data.clear();
    },
    all() {
      return Array.from(data.entries()).map(([key, value]) => ({ key, value }));
    }
  };
}
