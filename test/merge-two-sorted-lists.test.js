const leetcode = require('leetcode');
const func = require('../src/merge-two-sorted-lists');

describe('merge-two-sorted-lists', () => {
  test('should ', () => {
    const l1 = leetcode.List.create([1, 2, 4]);
    const l2 = leetcode.List.create([1, 3, 4]);

    const result = func(l1, l2);

    expect(result.toArray()).toStrictEqual([1, 1, 2, 3, 4, 4])

  });
  test('should ', () => {
    const l1 = leetcode.List.create([]);
    // console.log(l1);
    const l2 = leetcode.List.create([]);

    const result = func(l1, l2);

    expect(result).toBe(null);

  });
});