const caesar = require('./caesar_cipher');

test('wrapping from z to a', () =>{
  expect(caesar('zzz',1)).toBe('aaa')
});

test('keeping the same case', () =>{
  expect(caesar('CcCc',1)).toBe('DdDd')
});