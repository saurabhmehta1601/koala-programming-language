const add = require("../src/add");

describe("test", () => {
  it.skip("adds 2 + 5 to 7", () => {
    expect(add(2, 5)).toBe(7);
  });
});
