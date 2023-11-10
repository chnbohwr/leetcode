const func = require('../src/generateParenthesis');

describe('generateParenthesis', () => {
  test('should ', () => {
    expect(func(3)).toEqual(["((()))","(()())","(())()","()(())","()()()"])
  });
  
});