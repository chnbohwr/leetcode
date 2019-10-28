/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const romanNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let answer = '';
  let cursor = 0;
  while (num > 0) {
    if (num >= romanNum[cursor]) {
      answer += roman[cursor];
      num -= romanNum[cursor];
    } else {
      cursor += 1;
    }
  }
  return answer;
};

module.exports = intToRoman;