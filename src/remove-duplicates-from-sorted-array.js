/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let cursor = 0;
  for (let index = 1; index < nums.length; index++) {
    if (nums[cursor] !== nums[index]) {
      cursor += 1;
      nums[cursor] = nums[index];
    }
  }
  return cursor + 1;
};

module.exports = removeDuplicates;