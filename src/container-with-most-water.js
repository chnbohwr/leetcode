/**
 * @param {number[]} inputArr
 * @return {number}
 */
var maxArea = function (inputArr) {
  let area = 0;
  let startIndex = 0;
  let endIndex = inputArr.length - 1;

  while (startIndex < endIndex) {
    area = Math.max(
      area,
      Math.min(inputArr[startIndex], inputArr[endIndex]) * (endIndex - startIndex),
    );
    if (inputArr[startIndex] > inputArr[endIndex]) {
      endIndex--;
    } else {
      startIndex++;
    }
  }
  return area;
};

module.exports = maxArea;