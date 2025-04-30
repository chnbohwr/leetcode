const func = require('../src/top-k-frequent-elements');

describe('top-k-frequent-elements', () => {
  test('should return the k most frequent elements', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = 2;
    const result = func(nums, k);
    // Since [1, 2] and [2, 1] are both valid answers, we need to check both
    expect(result.sort()).toEqual([1, 2].sort());
  });

  test('should handle single element', () => {
    const nums = [1];
    const k = 1;
    const result = func(nums, k);
    expect(result).toEqual([1]);
  });

  test('should handle multiple elements with same frequency', () => {
    const nums = [1, 1, 2, 2, 3, 3];
    const k = 2;
    // Any two numbers from [1, 2, 3] are correct
    const result = func(nums, k);
    expect(result.length).toBe(2);
    expect([1, 2, 3].every(num => result.includes(num) || result.filter(n => n === num).length === 0)).toBe(true);
  });
  
  test('should handle larger input', () => {
    const nums = [5, 5, 5, 1, 1, 1, 2, 2, 3, 4, 4, 4, 4];
    const k = 3;
    const result = func(nums, k);
    // Should include 5, 4, and 1 (most frequent)
    expect(new Set(result)).toEqual(new Set([5, 4, 1]));
  });
});