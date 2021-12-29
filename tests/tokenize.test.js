const { TYPES } = require('../src/constants');
const tokenize = require('../src/tokenize');

describe('tokenize', () => {
  it('return empty array when empty string passed', () => {
    const input = '';
    expect(tokenize(input)).toEqual([]);
  });

  it('throws an error if input contains invalid character', () => {
    const input = 'add @ 4';
    expect(() => tokenize(input)).toThrow(TYPES.SYNTAX_ERROR);
  });
  it('should ignore white space completely', () => {
    const input = '                   ';
    expect(tokenize(input)).toEqual([]);
  });

  it('should correctly tokenize parenthesis', () => {
    const input = ' ()( ';
    const result = tokenize(input);
    expect(result).toEqual([
      { type: TYPES.PARENTHESIS, value: '(' },
      { type: TYPES.PARENTHESIS, value: ')' },
      { type: TYPES.PARENTHESIS, value: '(' },
    ]);
  });
  it('should correctly tokenize number ', () => {
    const input = '12 14';
    const result = tokenize(input);
    expect(result).toEqual([
      { type: TYPES.NUMBER, value: 12 },
      { type: TYPES.NUMBER, value: 14 },
    ]);
  });

  it('should correctly tokenize strings ', () => {
    const input = ' "12 14" ';
    const result = tokenize(input);
    expect(result).toEqual([{ type: TYPES.STRING, value: '12 14' }]);
  });
});
