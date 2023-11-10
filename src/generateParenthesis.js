/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const resultArray = [];
  const generate = (newResult, openCount, closeCount) => {
    if(openCount === n && closeCount === n) {
      resultArray.push(newResult);
      return;
    }
    if(openCount < n && openCount >= closeCount) {
      generate(newResult + '(', openCount + 1, closeCount);
    }
    if(closeCount < n && openCount > closeCount) {
      generate(newResult + ')', openCount, closeCount + 1);
    }
  }
  generate('(', 1, 0);
  return resultArray;
};

module.exports = generateParenthesis;