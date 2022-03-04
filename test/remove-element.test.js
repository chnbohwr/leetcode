const func = require('../src/remove-element');

describe('first', () => {
  it('test 1', () => {
    const arr = [3,2,2,3];
    const result = func(arr, 3);
    expect(result).toBe(2);
    expect(arr).toEqual([ 2, 2, 2, 3 ])
  })
})
