/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let cursor = -1;
  if (needle.length === 0) {
    return 0;
  }
  for (var i = 0; i < haystack.length; i++) {
    let flag = true;
    for (var j = 0; j < needle.length; j++) {
      // console.log(`i:${i}, j:${j}`)
      if (needle[j] !== haystack[i + j]) {
        flag = false;
        break;
      }
    }
    if(flag){
      cursor = i;
      break;
    }
  }
  return cursor;
};

module.exports = strStr;