require('dotenv').config();
const { formatDate } = require('./utils');
const { getEnvVar } = require('env-config-helper');

let passed = 0, failed = 0;

function assert(label, condition) {
  if (!condition) { console.error('FAIL:', label); failed++; return; }
  console.log('ok -', label);
  passed++;
}

assert('formatDate returns a string', typeof formatDate(new Date()) === 'string');
assert('formatDate has correct format', /^\d{4}-\d{2}-\d{2}$/.test(formatDate(new Date())));
assert('formatDate handles epoch', typeof formatDate(new Date(0)) === 'string');
assert('getEnvVar returns default', getEnvVar('PORT', 3000) === 3000);
assert('getEnvVar returns value', getEnvVar('NODE_ENV', 'test') !== undefined);

console.log(`\n${passed} passed, ${failed} failed`);
if (failed) process.exit(1);
