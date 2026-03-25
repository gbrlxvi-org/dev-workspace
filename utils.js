'use strict';

function formatDate(d) {
  return d.toISOString().split('T')[0];
}

function getEnvVar(key, fallback) {
  return process.env[key] !== undefined ? process.env[key] : (fallback !== undefined ? fallback : null);
}

module.exports = { formatDate, getEnvVar };
