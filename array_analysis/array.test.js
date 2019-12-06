const analysis = require('./array');

test('average of an array of numbers', () => {
  expect(analysis.average([2,3,4,5,6])).toBe(4);
});

test('min value of an array of numbers', () => {
  expect(analysis.min([3,5,1,9,2])).toBe(1);
});