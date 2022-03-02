const func = require('../src/remove-duplicates-from-sorted-array');

describe('first test', () => {
  it('test1', () => {
    expect(func([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5)
  })
  it('test1', () => {
    expect(func([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5])).toBe(6)
  })
  it('test1', () => {
    expect(func([0, 0, 1, 1, 1])).toBe(2)
  })
});