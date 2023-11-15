const func = require("../src/swapPairs");
var List = require("leetcode").List;

describe("swapPairs", () => {
  test("should first", () => {
    const input = List.create([1, 2, 3, 4]);
    const output = func(input);
    expect(output.toArray()).toEqual([2, 1, 4, 3]);
  });
  test('should first', () => { 
    const input = List.create([2,5,3,4,6,2,2]);
    const output = func(input);
    expect(output.toArray()).toEqual([5,2,4,3,2,6,2]);
   })
});
