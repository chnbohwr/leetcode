/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let answer = Infinity;
  let answerDiff = Infinity;
  if (nums.length < 3) {
    return answer;
  }
  nums = nums.sort((a, b) => (a - b));
  const maxCursor = nums.length - 1;
  for (let a = 0; a <= maxCursor; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) {
      continue;
    }
    let b = a + 1, c = maxCursor;
    while (b < c) {
      const numa = nums[a];
      const numb = nums[b];
      const numc = nums[c];
      const total = numa + numb + numc;
      const diff = Math.abs(target - total);
      if (diff < answerDiff) {
        answerDiff = diff;
        answer = total;
      }
      if (total === target) {
        // console.log('find real answer', numa, numb, numc);
        return target;
      } else if (total > target) {
        c--;
      } else {
        b++
      }
    }
  }
  return answer;
};

module.exports = threeSumClosest;