/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const length = s.length;
  if (length <= 1) {
    return length;
  }
  let startIndex = 0;
  let endIndex = 1;
  let result = 1;
  while (startIndex < length && endIndex <= length) {
    const sub = s.substring(startIndex, endIndex);
    const nextChar = s[endIndex];
    const duplicateIndex = sub.indexOf(nextChar);
    // if find duplicate character
    if (duplicateIndex > -1) {
      // move startIndex to endIndex
      startIndex += 1;
      endIndex = startIndex + 1;
    }else {
      endIndex += 1;
    }
    if (sub.length > result) {
      result = sub.length;
    }
  }
  return result;
};

module.exports = lengthOfLongestSubstring;