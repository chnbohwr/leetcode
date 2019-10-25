const func = require('../src/longest-palindromic-substring');

describe('longest-palindromic-substring', () => {
  it('asdf', () => {
    const result = func('babad');
    expect(result).toBe('bab');
  });

  it('test2', () => {
    const result = func('cbbd');
    expect(result).toBe('bb');
  })
})
