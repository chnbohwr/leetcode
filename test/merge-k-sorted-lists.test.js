const leetcode = require('leetcode');
const func = require('../src/merge-k-sorted-lists');


describe('merge-k-sorted-lists', () => {
  test('should ', () => {
    const result = func([
      leetcode.List.create([1, 4, 5]),
      leetcode.List.create([1, 3, 4]),
      leetcode.List.create([2, 6])
    ]);
    const answer = leetcode.List.create([1,1,2,3,4,4,5,6]);
    expect(result).toStrictEqual(answer);
  })

  test('should ', () => {
    const result = func([null]);
    const answer = leetcode.List.create([]);
    expect(result).toStrictEqual(answer);
  })

})
