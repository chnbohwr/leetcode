const func = require("../src/permutations");

describe("first", () => {
  test("should first", () => {
    const result = func([1, 2, 3]);
    expect(result).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });
});
