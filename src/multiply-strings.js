/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  var arraynum1 = num1.split('').reverse();
  var arraynum2 = num2.split('').reverse();
  var len1 = arraynum1.length;
  var len2 = arraynum2.length;
  var totalLen = len1 + len2;
  var tempArr = Array(totalLen).fill(0);
  for (var i = 0; i < len1; i++) {
    for (var j = 0; j < len2; j++) {
      var n1 = arraynum1[i];
      var n2 = arraynum2[j];
      var mul = n1 * n2;
      tempArr[i + j] += mul;
      if (tempArr[i + j] > 9) {
        tempArr[i + j + 1] += Math.floor(tempArr[i + j] / 10)
        tempArr[i + j] = tempArr[i + j] % 10;
      }
    }
  }
  var ansArr = tempArr.reverse();
  while (ansArr[0] === 0 && ansArr.length > 1) {
    ansArr.shift();
  }
  return ansArr.join('');
};


module.exports = multiply;