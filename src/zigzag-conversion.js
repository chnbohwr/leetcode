/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const result = new Array(numRows).fill("");
    let rowCursor = 0;
    let calcFlag = 1;
    if(numRows === 1) return s;
    for(let i=0; i< s.length; i++) {
      const char = s[i];
      result[rowCursor] += char;
      if(rowCursor === 0){
        calcFlag = 1;
      }
      if(rowCursor === numRows - 1){
        calcFlag = -1;
      }
      rowCursor += calcFlag;
    }
    return result.join('');
};

module.exports = convert;