const func = require('../src/4sum');

describe('4sum', () => {
  // test('should ', () => {
  //   expect(func([1,0,-1,0,-2,2], 0)).toEqual([[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]])
  // });
  // test('should ', () => {
  //   expect(func([0,0,0,0], 0)).toEqual([[0,0,0,0]])
  // });
  test('should ', () => {
    expect(func([-2,-1,-1,1,1,2,2], 0)).toEqual([[-2,-1,1,2],[-1,-1,1,1]])
  });
})
