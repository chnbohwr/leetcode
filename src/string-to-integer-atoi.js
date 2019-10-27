/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const ans = parseInt(str);
  const int = 2147483647;
  const nagInt = -2147483648;

  if (!ans) { return 0; }

  if (ans > int) {
    return int;
  }

  if (ans < nagInt) {
    return nagInt;
  }
  return ans;
};

module.exports = myAtoi;
