import { createDB } from './db.mjs';

const sessions = createDB();

function createSession(userId) {
  const sessionId = `sess_${Date.now()}`;
  sessions.set(sessionId, { userId, createdAt: Date.now() });
  return sessionId;
}

const sid = createSession('user-123');
console.log('Session:', sessions.get(sid));
console.log('Active sessions:', sessions.all().length);
