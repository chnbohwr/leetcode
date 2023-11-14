/**
 * simple way. O(2n^2)
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {

  const newStr = "#" + s.split("").join("#") + "#";

  let maxCenter = 0;
  let maxRadius = 0;

  let cursor = 1;
  const radiusArr = Array(newStr.length).fill(0);

  while (cursor < newStr.length) {
    let left = cursor -1;
    let right = cursor +1;

    const maxRight = maxCenter + maxRadius;
    const maxLeft = maxCenter - maxRadius;
    if(cursor < maxRight){
      // find left mirror radius
      const leftCursor = maxCenter - (cursor - maxCenter);
      const mirrorRadius = radiusArr[leftCursor] || 1;
      // console.log('cursor', cursor,'maxRight',maxRight, 'maxCenter', maxCenter, 'leftCursor' ,leftCursor, 'mirrorRadius', mirrorRadius, 'maxLeft', maxLeft);
      // console.table([radiusArr, newStr.split('')]);
      if((leftCursor - mirrorRadius) > maxLeft){
        left = cursor - mirrorRadius;
        right = cursor + mirrorRadius;
      }
    }


    while(left >= 0 && right <= (newStr.length-1) && newStr[left] === newStr[right]){
      const radius = right - cursor;
      // console.log('find', newStr.substring(left, right + 1), 'radius', radius);
      radiusArr[cursor] = radius;
      
      if(radius > maxRadius){
        maxRadius = radius;
        maxCenter = cursor
      }
      
      left--;
      right++
    }

    cursor++;
  }

  // console.log(newStr);
  // console.log(radiusArr.join(','));

  const ans = newStr
    .substring(maxCenter - maxRadius, maxCenter + maxRadius + 1)
    .replace(/#/g, "");
  return ans;
};

module.exports = longestPalindrome;
