/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) { return ''; }
  let cursor = 0;
  let answer = '';
  const baseStr = strs[0];
  const maxLen = baseStr.length
  while (cursor < maxLen) {
    const char = baseStr.charAt(cursor);
    const hasWord = strs.every(d => d.charAt(cursor) === char);
    if (hasWord) {
      answer += char;
      cursor += 1;
    } else {
      break;
    }
  }
  return answer;
};

module.exports = longestCommonPrefix;