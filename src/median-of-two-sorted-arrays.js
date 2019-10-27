/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let indexNum1 = 0, indexNum2 = 0;
  let sortedArr = [];
  const length = nums1.length + nums2.length;
  const med = Math.floor(length / 2);
  while (sortedArr.length <= med) {
    const num1 = nums1[indexNum1];
    const num2 = nums2[indexNum2];
    if (num1 === undefined || num2 === undefined) {
      if (!num1) {
        sortedArr = sortedArr.concat(nums2.slice(indexNum2, indexNum2 + med + 1 - sortedArr.length));
      }
      if (!num2) {
        sortedArr = sortedArr.concat(nums1.slice(indexNum1, indexNum1 + med + 1 - sortedArr.length));
      }
    } else {
      if (num1 < num2) {
        sortedArr.push(num1);
        indexNum1 += 1;
      } else {
        sortedArr.push(num2);
        indexNum2 += 1;
      }
    }
  }
  if (length % 2 === 0) {
    return (sortedArr[med - 1] + sortedArr[med]) / 2;
  }
  return (sortedArr[med]);
};

module.exports = findMedianSortedArrays;