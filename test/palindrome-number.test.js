const func = require('../src/palindrome-number.js');


describe('palindrome-number', () => {
  it('', () => {
    expect(func(121)).toBe(true)
  })
  it('', () => {
    expect(func(-121)).toBe(false)
  })
  it('', () => {
    expect(func(10)).toBe(false)
  })
})
