const tokenize = require('../src/tokenize');

describe('tokenize', () => {
  it('return empty array when empty string passed', () => {
    const input = '';
    expect(tokenize(input)).toEqual([]);
  });

  it('should ignore white space completely', () => {
    const input = '                   ';
    expect(tokenize(input)).toEqual([]);
  });

  it('should correctly tokenize parenthesis', () => {
    const input = ' ()( ';
    const result = tokenize(input);
    expect(result).toEqual([
      { type: 'Parenthesis', value: '(' },
      { type: 'Parenthesis', value: ')' },
      { type: 'Parenthesis', value: '(' },
    ]);
  });
  it('should correctly tokenize number ', () => {
    const input = '12 14';
    const result = tokenize(input);
    expect(result).toEqual([
      { type: 'Number', value: 12 },
      { type: 'Number', value: 14 },
    ]);
  });

  it('should correctly tokenize strings ', () => {
    const input = ' "12 14" ';
    const result = tokenize(input);
    expect(result).toEqual([{ type: 'String', value: '12 14' }]);
  });
});
