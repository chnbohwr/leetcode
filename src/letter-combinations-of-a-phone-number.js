/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const mapper = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  const digArr = Array.from(digits).map(d => mapper[d]);
  return digArr.reduce((acc, val) => {
    if (!acc.length) { return val };
    const result = [];
    acc.forEach(accStr => {
      val.forEach(valStr => {
        result.push(accStr + valStr);
      });
    });
    return result;
  }, []);
};

module.exports = letterCombinations;