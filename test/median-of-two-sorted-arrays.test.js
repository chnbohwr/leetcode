const func = require('../src/median-of-two-sorted-arrays');

describe('Name of the group', () => {
  it('should ', () => {
    const result = func([1, 3], [2]);
    expect(result).toBe(2.0)
  });

  it('should ', () => {
    const result = func([0, 0], [0, 0]);
    expect(result).toBe(0)
  });


  it('should ', () => {
    const result = func([1, 2], [3, 4]);
    expect(result).toBe(2.5)
  });

});