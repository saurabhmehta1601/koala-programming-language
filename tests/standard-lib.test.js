const { environment } = require('../src/standard-lib');

describe('standard-lib', () => {
  it('add returns sum of 1 , 2 and 3 to as 6', () => {
    const add = environment['add'];
    expect(add(1, 2, 3)).toBe(6);
  });
  it('subtract returns subtraction of 1 , 2 and 3 to as -4 ', () => {
    const subtract = environment['subtract'];
    expect(subtract(1, 2, 3)).toBe(-4);
  });
  it('divide returns division of 100 , 5 and 4 to as 5 ', () => {
    const divide = environment['divide'];
    expect(divide(100, 5, 4)).toBe(5);
  });
  it('multiply returns multiplication of 1 , 2 ,3 and 4 to as 24 ', () => {
    const multiply = environment['multiply'];
    expect(multiply(1, 2, 3, 4)).toBe(24);
  });
  it('modulo returns modular of 100 by  7 and then 3 as 2', () => {
    const modulo = environment['modulo'];
    expect(modulo(100, 7, 3)).toBe(2);
  });
});
