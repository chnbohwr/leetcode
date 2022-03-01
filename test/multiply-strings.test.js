const func = require('../src/multiply-strings.js');

describe('first', () => {
  it('2x3', () => {
    expect(func('172', '330')).toBe('56760');
    expect(func('23423', '1111')).toBe('26022953');
    expect(func('0', '0')).toBe('0');
  })
})