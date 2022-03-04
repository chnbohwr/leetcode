/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function (board) {
  const set = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];
      if (value === '.') {
        continue;
      }
      const key1 = `row${i}-${value}`;
      const key2 = `col${j}-${value}`;
      const key3 = `box${Math.floor(i / 3)}${Math.floor(j / 3)}-${value}`;
      if (set.has(key1) || set.has(key2) || set.has(key3)) {
        return false;
      }
      set.add(key1);
      set.add(key2);
      set.add(key3);
    }
  }
  return true;
};

module.exports = isValidSudoku;