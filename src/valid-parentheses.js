/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) { return false; }
  const map = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  const compareArr = [];
  const stringArr = s.split('');

  while (stringArr.length > 0) {
    const char = stringArr[0];
    if (map[char]) {
      if (compareArr[0] === map[char]) {
        compareArr.shift();
      } else {
        return false;
      }
    } else {
      compareArr.unshift(char)
    }
    stringArr.splice(0, 1);
  }

  return compareArr.length === 0
};

module.exports = isValid;