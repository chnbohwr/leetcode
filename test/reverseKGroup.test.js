const func = require("../src/reverseKGroup");
const List = require("leetcode").List;

describe("first", () => {
  test("should first", () => {
    const input = List.create([1, 2, 3, 4, 5]);
    const group = 2;
    const result = func(input, group);
    const ans = List.create([2, 1, 4, 3, 5]);
    expect(result.toArray()).toEqual(ans.toArray());
  });
  test("should first", () => {
    const input = List.create([1, 2, 3, 4, 5]);
    const group = 3;
    const result = func(input, group);
    const ans = List.create([3, 2, 1, 4, 5]);
    expect(result.toArray()).toEqual(ans.toArray());
  });
  test("should first", () => {
    const input = List.create([1, 2]);
    const group = 2;
    const result = func(input, group);
    const ans = List.create([2,1]);
    expect(result.toArray()).toEqual(ans.toArray());
  });
});
