const reverseString = require('./reverseString');

test('returns the string reversed', () => {
    expect(reverseString('hello')).toBe('olleh');
});