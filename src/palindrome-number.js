/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) { return false; }
  if (x < 10) { return true; }

  const arr = x.toString().split('');
  while (arr.length > 1) {
    if (arr[0] === arr[arr.length - 1]) {
      arr.shift();
      arr.pop();
    } else {
      return false;
    }
  }
  return true;
};

module.exports = isPalindrome;