var func = require('../src/search-insert-position');

describe('first', () => {
  it('test a', () => {
    const result = func([1, 3, 5, 6], 2);
    expect(result).toBe(1);
  });
  it('test b', () => {
    const result = func([1, 3, 5, 6], 7);
    expect(result).toBe(4);
  });
  it('test c', () => {
    const result = func([1, 3, 5, 6], 5);
    expect(result).toBe(2);
  });
});