/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */

const analysis = {
  average: (arr) => { return (arr.reduce((a, b) => a + b, 0) / arr.length); },
  min: (arr) => { return Math.min(...arr); },
  max: (arr) => { return Math.max(...arr); },
  len: (arr) => { return arr.length; },
};

module.exports = analysis;
