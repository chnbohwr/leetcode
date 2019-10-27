/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let nagative = x < 0;
  let copyX = Math.abs(x);
  let ans = 0;
  while (copyX > 0) {
    ans = ans * 10 + copyX % 10;
    copyX = Math.floor(copyX / 10);
  }
  if (ans > 2147483648) {
    return 0;
  }
  return nagative ? -ans : ans;
};

module.exports = reverse;