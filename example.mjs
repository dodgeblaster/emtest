import { createDB } from './db.mjs';

const db = createDB();

// Set values
db.set('user:1', { name: 'Alice', age: 30 });
db.set('user:2', { name: 'Bob', age: 25 });

// Get values
console.log('Get user:1:', db.get('user:1'));

// Check existence
console.log('Has user:1:', db.has('user:1'));

// Get all entries
console.log('All entries:', db.all());

// Delete
db.delete('user:2');
console.log('After delete:', db.all());

// Clear
db.clear();
console.log('After clear:', db.all());
