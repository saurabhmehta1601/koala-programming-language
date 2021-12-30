const { TOKEN_TYPES , AST_NODE_TYPES } = require('../src/constants');
const { parse } = require('../src/parse');

describe('parse', () => {
  it('returns NumericLiteral for Number token', () => {
    const input = [{ type: TOKEN_TYPES.NUMBER, value: 11 }];
    const result = parse(input);
    const ast = {
      type: AST_NODE_TYPES.NUMERIC_LITERAL,
      value: 11,
    };
    expect(result).toEqual(ast);
  });

  it('returns StringLiteral for String token', () => {
    const input = [{ type: TOKEN_TYPES.STRING, value: '11' }];
    const result = parse(input);
    const ast = {
      type: AST_NODE_TYPES.STRING_LITERAL,
      value: '11',
    };
    expect(result).toEqual(ast);
  });

  it('returns Identifier for Name token', () => {
    const input = [{ type: TOKEN_TYPES.NAME, value: 'add' }];
    const result = parse(input);
    expect(result).toEqual({
      type: AST_NODE_TYPES.IDENTIFIER,
      name: 'add',
    });
  });
});
