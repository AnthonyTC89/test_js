const capitalize = require('./capitalize');
test('capitalize string', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});