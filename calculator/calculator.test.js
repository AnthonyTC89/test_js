/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const Calculator = require('./calculator');

test('add 2 numbers', () => {
  expect(Calculator.add(4, 5)).toBe(9);
});

test('subtracts 2 numbers', () => {
  expect(Calculator.subtract(5, 4)).toBe(1);
});

test('Divides 2 numbers', () => {
  expect(Calculator.divide(8, 4)).toBe(2);
});

test('Multiplies 2 numbers', () => {
  expect(Calculator.multiply(5, 2)).toBe(10);
});
