const { isWhiteSpace, isLetter, isNumber } = require('../src/identifiers');

describe('Identifiers ', () => {
  it('isWhiteSpace returns true if it is whitespace', () => {
    expect(isWhiteSpace('        ')).toBe(true);
    expect(isWhiteSpace(' ')).toBe(true);
  });
  it('isWhiteSpace returns false if it contains anything or is empty string ', () => {
    expect(isWhiteSpace('')).toBe(false);
    expect(isWhiteSpace('s')).toBe(false);
  });
  it('isNumber returns true if it is number', () => {
    expect(isNumber('123')).toBe(true);
  });
  it('isNumber return false if input is contains anything besides digits', () => {
    expect(isNumber('s123')).toBe(false); // character at start
    expect(isNumber('123s')).toBe(false); // character at end
    expect(isNumber('12s3')).toBe(false); // character at mid
    expect(isNumber('')).toBe(false); // empty string
    expect(isNumber('   ')).toBe(false); // whitespace
  });
  it('isLetter returns true if it is an alphabet', () => {
    expect(isLetter('s')).toBe(true);
    expect(isLetter('S')).toBe(true);
  });
});
