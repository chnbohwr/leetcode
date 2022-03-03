/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return findFunc(nums, target, 0, nums.length - 1);
};

const findFunc = (nums, target, startIndex, endIndex) => {
  const middleIndex = Math.round((startIndex + endIndex) / 2);
  // console.log(`middleIndex: ${middleIndex}`);
  const middleValue = nums[middleIndex];
  if (startIndex > endIndex) {
    return startIndex;
  }
  if (middleValue === target) {
    return middleIndex;
  }
  if (target > middleValue) {
    return findFunc(nums, target, middleIndex + 1, endIndex);
  }
  if (target < middleValue) {
    return findFunc(nums, target, startIndex, middleIndex - 1);
  }
}

module.exports = searchInsert;