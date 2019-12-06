const Calculator = require('./calculator');

test('add 2 numbers', () => {
  expect(Calculator.add(4,5)).toBe(9);
});

test('subtracts 2 numbers', () => {
  expect(Calculator.subtract(5,4)).toBe(1);
});