const { TOKEN_TYPES } = require('../src/constants');
const tokenize = require('../src/tokenize');

describe('tokenize', () => {
  it('return empty array when empty string passed', () => {
    const input = '';
    expect(tokenize(input)).toEqual([]);
  });

  it('throws an error if input contains invalid character', () => {
    const input = 'add @ 4';
    expect(() => tokenize(input)).toThrow(TOKEN_TYPES.SYNTAX_ERROR);
  });
  it('should ignore white space completely', () => {
    const input = '                   ';
    expect(tokenize(input)).toEqual([]);
  });

  it('should correctly tokenize parenthesis', () => {
    const input = ' ()( ';
    const result = tokenize(input);
    expect(result).toEqual([
      { type: TOKEN_TYPES.PARENTHESIS, value: '(' },
      { type: TOKEN_TYPES.PARENTHESIS, value: ')' },
      { type: TOKEN_TYPES.PARENTHESIS, value: '(' },
    ]);
  });
  it('should correctly tokenize number ', () => {
    const input = '12 14';
    const result = tokenize(input);
    expect(result).toEqual([
      { type: TOKEN_TYPES.NUMBER, value: 12 },
      { type: TOKEN_TYPES.NUMBER, value: 14 },
    ]);
  });

  it('should correctly tokenize strings ', () => {
    const input = ' "12 14" ';
    const result = tokenize(input);
    expect(result).toEqual([{ type: TOKEN_TYPES.STRING, value: '12 14' }]);
  });
});