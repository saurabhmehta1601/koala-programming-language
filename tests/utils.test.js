const { pipe } = require('../src/utils');

describe('utils', () => {
  it('pipe', () => {
    const sq = (n) => Math.pow(n, 2);
    const addTwo = (n) => n + 2;
    expect(pipe(sq, addTwo)(10)).toBe(102);
  });
});
