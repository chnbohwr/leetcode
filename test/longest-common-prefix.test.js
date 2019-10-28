const func = require('../src/longest-common-prefix');

describe('longest-common-prefix', () => {
  test('should ', () => {
    expect(func(["flower", "flow", "flight"])).toBe('fl')
  })
  test('should ', () => {
    expect(func([])).toBe('')
  })

  test('should ', () => {
    expect(func(['a'])).toBe('a')
  })
})
