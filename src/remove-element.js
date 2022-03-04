/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (!nums.length) { return [] }
  let cursor = 0;
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (value !== val) {
      nums[cursor] = value;
      cursor += 1;
    }
  }
  return cursor;
};

module.exports = removeElement;