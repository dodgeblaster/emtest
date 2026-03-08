import { createDB } from './db.mjs';

const db = createDB();

// Counter pattern
db.set('visits', 0);
db.set('visits', db.get('visits') + 1);
db.set('visits', db.get('visits') + 1);

console.log('Total visits:', db.get('visits'));
