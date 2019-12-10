/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const capitalize = require('./capitalize');

test('capitalize string', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});
