const func = require('../src/reverse-integer.js');

describe('reverse-integer', () => {
  it('', () => {
    expect(func(123)).toBe(321);
  })
  it('', () => {
    expect(func(-123)).toBe(-321);
  })
  it('', () => {
    expect(func(120)).toBe(21);
  })
  it('', () => {
    expect(func(1534236469)).toBe(0);
  })
  it('', () => {
    expect(func(-2147483648)).toBe(0);
  })
})
