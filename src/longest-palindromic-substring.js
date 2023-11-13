/**
 * simple way. O(2n^2)
 * @param {string} s
 * @return {string}
 */

const getPalindrome = (cursor, newStr) => {
  let left = cursor - 1, right = cursor + 1, ans = newStr[cursor];

  while (left > 0 && right < newStr.length) {
    const charL = newStr[left];
    const charR = newStr[right];
    if (charL === charR) {
      ans = charL + ans + charR;
    } else {
      break;
    }
    right++;
    left--;
  }

  return ans.replace(/#/g, '');
}

var longestPalindrome = function (s) {
  const newStr = '#' + s.split('').join('#') + '#';
  let cursor = 0;
  let answer = '';
  while (cursor < newStr.length) {
    const tempAns = getPalindrome(cursor, newStr);
    if (tempAns.length > answer.length) { answer = tempAns; }
    cursor++;
  }
  return answer;
};


module.exports = longestPalindrome;
