const func = require('../src/longest-substring-without-repeating-characters');

describe('test function', () => {
  it('should match', () => {
    const result = func('abcabcbb');
    expect(result).toBe(3);
  });

  it('should match', () => {
    const result = func('bbbbbb');
    expect(result).toBe(1);
  });

  it('should match', () => {
    const result = func('pwwkew');
    expect(result).toBe(3);
  });

  it('should ', () => {
    const result = func('au');
    expect(result).toBe(2);
  });

  it('should ', () => {
    const result = func('dvdf');
    expect(result).toBe(3);
  });
});