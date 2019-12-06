/* eslint-disable linebreak-style */

const analysis = {
  average: (arr) => arr.reduce((a, b) => a + b, 0) / arr.length,
  min: (arr) => Math.min(...arr),
  max: (arr) => Math.max(...arr),
  len: (arr) => arr.length,
};

module.exports = analysis;
