/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let string = s;
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const romanNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let cursor = 0;
  let answer = 0;

  while (string.length) {
    if (string.indexOf(roman[cursor]) === 0) {
      string = string.substring(roman[cursor].length);
      answer += romanNum[cursor]
    } else {
      cursor += 1;
    }
  }
  return answer;
};

module.exports = romanToInt;
