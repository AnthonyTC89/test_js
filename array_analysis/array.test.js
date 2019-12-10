/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

const analysis = require('./array');

test('average of an array of numbers', () => {
  expect(analysis.average([2, 3, 4, 5, 6])).toBe(4);
});

test('min value of an array of numbers', () => {
  expect(analysis.min([3, 5, 1, 9, 2])).toBe(1);
});

test('Maximum value of an array of numbers', () => {
  expect(analysis.max([10, 3, 57, 6, 0, 29])).toBe(57);
});

test('Length of an array of numbers', () => {
  expect(analysis.len([10, 3, 57, 6, 0, 29])).toBe(6);
});
