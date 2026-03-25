require('dotenv').config();
const { formatDate } = require('./utils');

let passed = 0, failed = 0;

function assert(label, condition) {
  if (!condition) { console.error('FAIL:', label); failed++; return; }
  console.log('ok -', label);
  passed++;
}

assert('formatDate returns a string', typeof formatDate(new Date()) === 'string');
assert('formatDate has correct format', /^\d{4}-\d{2}-\d{2}$/.test(formatDate(new Date())));
assert('formatDate handles epoch', typeof formatDate(new Date(0)) === 'string');

console.log(`
${passed} passed, ${failed} failed`);
if (failed) process.exit(1);
