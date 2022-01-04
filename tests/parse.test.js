const { TOKEN_TYPES, AST_NODE_TYPES } = require('../src/constants');
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
  it('returns AST for basic data structure', () => {
    const tokens = [
      { type: TOKEN_TYPES.PARENTHESIS, value: '(' },
      { type: TOKEN_TYPES.NAME, value: 'add' },
      { type: TOKEN_TYPES.NUMBER, value: 2 },
      { type: TOKEN_TYPES.NUMBER, value: 3 },
      { type: TOKEN_TYPES.PARENTHESIS, value: ')' },
    ];

    const ast = {
      type: AST_NODE_TYPES.CALL_EXPRESSION,
      name: 'add',
      arguments: [
        { type: AST_NODE_TYPES.NUMERIC_LITERAL, value: 2 },
        { type: AST_NODE_TYPES.NUMERIC_LITERAL, value: 3 },
      ],
    };

    const result = parse(tokens);
    expect(result).toEqual(ast);
  });

  it('returns correct ast for nested data structure', () => {
    const tokens = [
      { type: TOKEN_TYPES.PARENTHESIS, value: '(' },
      { type: TOKEN_TYPES.NAME, value: 'add' },
      { type: TOKEN_TYPES.NUMBER, value: '2' },
      { type: TOKEN_TYPES.NUMBER, value: '3' },
      { type: TOKEN_TYPES.PARENTHESIS, value: '(' },
      { type: TOKEN_TYPES.NAME, value: 'subtract' },
      { type: TOKEN_TYPES.NUMBER, value: '3' },
      { type: TOKEN_TYPES.NUMBER, value: '2' },
      { type: TOKEN_TYPES.PARENTHESIS, value: ')' },
      { type: TOKEN_TYPES.PARENTHESIS, value: ')' },
    ];
    const ast = {
      type: AST_NODE_TYPES.CALL_EXPRESSION,
      name: 'add',
      arguments: [
        { type: AST_NODE_TYPES.NUMERIC_LITERAL, value: '2' },
        { type: AST_NODE_TYPES.NUMERIC_LITERAL, value: '3' },
        {
          type: AST_NODE_TYPES.CALL_EXPRESSION,
          name: 'subtract',
          arguments: [
            { type: AST_NODE_TYPES.NUMERIC_LITERAL, value: '3' },
            { type: AST_NODE_TYPES.NUMERIC_LITERAL, value: '2' },
          ],
        },
      ],
    };
    const result = parse(tokens);
    expect(result).toEqual(ast);
  });
});
