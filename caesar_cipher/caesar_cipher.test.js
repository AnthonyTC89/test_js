/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

const caesar = require('./caesar_cipher');

test('wrapping from z to a', () => {
  expect(caesar('zzz', 1)).toBe('aaa');
});

test('keeping the same case', () => {
  expect(caesar('CcCc', 1)).toBe('DdDd');
});

test('Testing for punctuation', () => {
  expect(caesar('zZ.,/', 1)).toBe('aA/-0');
});

test('Testing ceasar cipher', () => {
  expect(caesar('defend', 10)).toBe('nopoxn');
});
