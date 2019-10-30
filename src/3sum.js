const threeSum = (nums) => {
  var answer = [];
  if (nums.length < 3) {
    return answer;
  }
  nums = nums.sort((a, b) => (a - b));
  const maxCursor = nums.length - 1;
  for (let a = 0; a <= maxCursor; a++) {
    if (nums[a] > 0) {
      return answer;
    }
    if (a > 0 && nums[a] === nums[a - 1]) {
      continue;
    }
    let b = a + 1, c = maxCursor;
    while (b < c) {
      const numa = nums[a];
      const numb = nums[b];
      const numc = nums[c];
      const ans = numa + numb + numc;
      if (ans === 0) {
        answer.push([numa, numb, numc]);
        c--;
        b++;
        while (b < c && nums[b] === nums[b - 1]) {
          b++;
        }
        while (b < c && nums[c] === nums[c + 1]) {
          c--;
        }
      } else if (ans > 0) {
        c--;
      } else {
        b++
      }
    }
  }
  return answer;
}

module.exports = threeSum;