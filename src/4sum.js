/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const resultArray = [];
  if(nums.length < 4) {
    return [];
  }
  const sortedNums = nums.sort((a, b) => a - b);
  // console.log(sortedNums.length);
  for(let firstCursor = 0; firstCursor < sortedNums.length - 3; firstCursor++) {
    // console.log('firstCursor', firstCursor);
    for( let secondCursor = firstCursor+ 1; secondCursor < sortedNums.length - 2; secondCursor++) {

      let leftCursor = secondCursor + 1;
      let rightCursor = sortedNums.length - 1;

      while (leftCursor < rightCursor) {
        const num1 = sortedNums[firstCursor];
        const num2 = sortedNums[secondCursor];
        const num3 = sortedNums[leftCursor];
        const num4 = sortedNums[rightCursor];
        const sum = num1 + num2 + num3 + num4;
        if(sum > target) {
          rightCursor--;
        }else if (sum < target) {
          leftCursor++;
        }else {
          resultArray.push([num1, num2, num3, num4]);
          while(sortedNums[rightCursor] === sortedNums[rightCursor - 1]) {
            rightCursor--;
          }
          while(sortedNums[leftCursor] === sortedNums[leftCursor + 1]) {
            leftCursor++;
          }
          rightCursor--;
          leftCursor++;
        }

      }


      while(sortedNums[secondCursor] === sortedNums[secondCursor + 1]) {
        secondCursor++;
      }
    }
    while (sortedNums[firstCursor] === sortedNums[firstCursor + 1]) {
      firstCursor++;
    }
  }
  return resultArray;
};

module.exports = fourSum;