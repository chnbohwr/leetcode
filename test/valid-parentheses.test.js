const func = require('../src/valid-parentheses');

describe('valid-parentheses', () => {
  test('should ', () => {
    expect(func('{}')).toBe(true);
  });
  test('should ', () => {
    expect(func('()[]{}')).toBe(true);
  });
  test('should ', () => {
    expect(func('{]')).toBe(false);
  });
  test('should ', () => {
    expect(func('([)]')).toBe(false);
  });
  test('should ', () => {
    expect(func('{[]}')).toBe(true);
  });
});