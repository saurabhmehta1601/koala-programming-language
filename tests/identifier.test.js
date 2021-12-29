const { isWhiteSpace, isWord, isNumber } = require('../src/identifiers');

describe('Identifiers ', () => {
  it('isWhiteSpace returns true if it is whitespace', () => {
    expect(isWhiteSpace('        ')).toBe(true);
  });
  it('isWhiteSpace returns false if it contains anything or is empty string ', () => {
    expect(isWhiteSpace('')).toBe(false);
    expect(isWhiteSpace('     as          ')).toBe(false);
  });
  it('isWord return false if isWord is empty string or whitespace', () => {
    expect(isWord('')).toBe(false);
    expect(isWord('       ')).toBe(false);
  });
  it('isWord return true if input is someword', () => {
    const input = 'someword';
    expect(isWord(input)).toBe(true);
  });
  it('isWord return false if input does not starts with alphabet ', () => {
    const input = '1saurabh';
    expect(isWord(input)).toBe(false);
  });
  it('isWord return false if input does not ends with alphabet ', () => {
    const input = 'saurabh1';
    expect(isWord(input)).toBe(false);
  });
  it('isNumber returns true if it is number', () => {
    expect(isNumber('123')).toBe(true);
    expect(isNumber(' 123 ')).toBe(false); // if contains whitespace
  });
  it('isNumber return false if input is contains anything besides digits', () => {
    expect(isNumber('s123')).toBe(false); // character at start
    expect(isNumber('123s')).toBe(false); // character at end
    expect(isNumber('12s3')).toBe(false); // character at mid
    expect(isNumber('')).toBe(false); // empty string
    expect(isNumber('   ')).toBe(false); // whitespace
  });
});
