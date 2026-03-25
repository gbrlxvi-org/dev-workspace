'use strict';

function getEnvVar(key, fallback) {
  return process.env[key] !== undefined ? process.env[key] : fallback;
}

function requireEnvVar(key) {
  if (!process.env[key]) throw new Error(`Missing required env var: ${key}`);
  return process.env[key];
}

module.exports = { getEnvVar, requireEnvVar };
