import { test } from 'node:test';
import assert from 'node:assert';
import { createDB } from './db.mjs';

test('set and get', () => {
  const db = createDB();
  db.set('key', 'value');
  assert.strictEqual(db.get('key'), 'value');
});

test('has', () => {
  const db = createDB();
  db.set('key', 'value');
  assert.strictEqual(db.has('key'), true);
  assert.strictEqual(db.has('missing'), false);
});

test('delete', () => {
  const db = createDB();
  db.set('key', 'value');
  assert.strictEqual(db.delete('key'), true);
  assert.strictEqual(db.has('key'), false);
  assert.strictEqual(db.delete('missing'), false);
});

test('clear', () => {
  const db = createDB();
  db.set('key1', 'value1');
  db.set('key2', 'value2');
  db.clear();
  assert.strictEqual(db.has('key1'), false);
  assert.strictEqual(db.has('key2'), false);
});

test('all', () => {
  const db = createDB();
  db.set('key1', 'value1');
  db.set('key2', 'value2');
  const entries = db.all();
  assert.strictEqual(entries.length, 2);
  assert.deepStrictEqual(entries, [
    { key: 'key1', value: 'value1' },
    { key: 'key2', value: 'value2' }
  ]);
});
