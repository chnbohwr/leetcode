const func = require('../src/string-to-integer-atoi.js');

describe('string-to-integer-atoi.js', () => {
  it('', () => {
    expect(func('42')).toBe(42);
  })
  it('', () => {
    expect(func('    -42')).toBe(-42);
  })
  it('', () => {
    expect(func('-91283472332')).toBe(-2147483648);
  })
  it('', () => {
    expect(func('words and 987')).toBe(0);
  })
})
