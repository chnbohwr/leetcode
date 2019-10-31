const func = require('../src/letter-combinations-of-a-phone-number');

describe('letter-combinations-of-a-phone-number', () => {
  test('should ', () => {
    expect(func('23')).toStrictEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
  });
});