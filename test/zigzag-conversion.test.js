const func = require('../src/zigzag-conversion');

describe('valid-parentheses', () => {
  test('should ', () => {
    expect(func('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
  });
  test('should ', () => {
    expect(func('AB', 1)).toBe('AB');
  });
});