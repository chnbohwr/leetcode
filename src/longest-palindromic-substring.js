/**
 * @param {string} s
 * @return {string}
 */

const manchars = (cursor, stringArray) => {
  let left = cursor - 1, right = cursor + 1, ans = stringArray[cursor];

  while (left > 0 && right < stringArray.length) {
    const charL = stringArray[left];
    const charR = stringArray[right];
    if (charL === charR) {
      ans = charL + ans + charR;
    } else {
      break;
    }
    right++;
    left--;
  }

  return ans;
}

var longestPalindrome = function (s) {
  const stringArray = s.split('');
  let cursor = 0;
  let answer = '';
  while (cursor < stringArray.length) {
    const tempAns = manchars(cursor, stringArray);
    if (tempAns.length > answer.length) { answer = tempAns; }
    cursor++;
  }
  return answer;
};


module.exports = longestPalindrome;
