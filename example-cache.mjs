import { createDB } from './db.mjs';

const cache = createDB();

function fetchData(id) {
  if (cache.has(id)) {
    console.log('Cache hit:', id);
    return cache.get(id);
  }
  
  console.log('Cache miss:', id);
  const data = { id, timestamp: Date.now() };
  cache.set(id, data);
  return data;
}

fetchData('page-1');
fetchData('page-1'); // Hit
fetchData('page-2');
