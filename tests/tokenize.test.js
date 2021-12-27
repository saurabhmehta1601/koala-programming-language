const tokenize = require("../src/tokenize");

describe("tokenize", () => {
  it("return array when empty string passed", () => {
    const input = "";
    expect(Array.isArray(tokenize(input))).toBe(true);
  });
  it("should ignore white space completely", () => {
    const input = "                   ";
    expect(tokenize(input)).toEqual([]);
  });
});
