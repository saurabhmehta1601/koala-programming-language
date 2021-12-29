const { TOKEN_TYPES } = require('../src/constants');
const { parse } = require('../src/parse');



describe('parse', () => {
  it('returns NumericLiteral for Number token', () => {
    const input = [{ type: TOKEN_TYPES.NUMBER, value: 11 }];
    const result = parse(input);
    expect(result).toEqual({
      type: 'NumericLiteral',
      value: 11,
    });
  });
  it('returns StringLiteral for String token', () => {
    const input = [{ type: TOKEN_TYPES.STRING, value: '11' }];
    const result = parse(input);
    expect(result).toEqual({
      type: 'StringLiteral',
      value: '11',
    });
  });
  it('returns Identifier for Name token', () => {
    const input = [{ type: TOKEN_TYPES.NAME, value: 'add' }];
    const result = parse(input);
    expect(result).toEqual({
      type: 'Identifier',
      name: 'add',
    });
  });
});
