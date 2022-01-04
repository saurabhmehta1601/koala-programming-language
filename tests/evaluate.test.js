const { AST_NODE_TYPES, TOKEN_TYPES } = require('../src/constants');
const { evaluate } = require('../src/evaluate');

describe('evaluate', () => {
  it('should return primitive numeric value for numeric literal node', () => {
    const ast = { type: AST_NODE_TYPES.NUMERIC_LITERAL, value: 2 };
    expect(evaluate(ast)).toBe(2);
  });
  it('should return primitive string value for string literal node', () => {
    const ast = { type: AST_NODE_TYPES.STRING_LITERAL, value: 'koala' };
    expect(evaluate(ast)).toBe('koala');
  });

  it('should correctly evaluate add ast node', () => {
    const ast = {
      type: AST_NODE_TYPES.CALL_EXPRESSION,
      name: 'add',
      arguments: [
        { type: TOKEN_TYPES.NUMBER, value: 1 },
        { type: TOKEN_TYPES.NUMBER, value: 2 },
        { type: TOKEN_TYPES.NUMBER, value: 3 },
      ],
    };

    expect(evaluate(ast)).toBe(6);
  });
  it('should correctly evaluate subtract ast node', () => {
    const ast = {
      type: AST_NODE_TYPES.CALL_EXPRESSION,
      name: 'subtract',
      arguments: [
        { type: TOKEN_TYPES.NUMBER, value: 1 },
        { type: TOKEN_TYPES.NUMBER, value: 2 },
        { type: TOKEN_TYPES.NUMBER, value: 3 },
      ],
    };

    expect(evaluate(ast)).toBe(-4);
  });
  it('should correctly evaluate divide ast node', () => {
    const ast = {
      type: AST_NODE_TYPES.CALL_EXPRESSION,
      name: 'divide',
      arguments: [
        { type: TOKEN_TYPES.NUMBER, value: 45 },
        { type: TOKEN_TYPES.NUMBER, value: 5 },
        { type: TOKEN_TYPES.NUMBER, value: 3 },
      ],
    };

    expect(evaluate(ast)).toBe(3);
  });
  it('should correctly evaluate multiply ast node', () => {
    const ast = {
      type: AST_NODE_TYPES.CALL_EXPRESSION,
      name: 'multiply',
      arguments: [
        { type: TOKEN_TYPES.NUMBER, value: 1 },
        { type: TOKEN_TYPES.NUMBER, value: 2 },
        { type: TOKEN_TYPES.NUMBER, value: 3 },
        { type: TOKEN_TYPES.NUMBER, value: 4 },
      ],
    };

    expect(evaluate(ast)).toBe(24);
  });
  it('should correctly evaluate modulo ast node', () => {
    const ast = {
      type: AST_NODE_TYPES.CALL_EXPRESSION,
      name: 'modulo',
      arguments: [
        { type: TOKEN_TYPES.NUMBER, value: 100 },
        { type: TOKEN_TYPES.NUMBER, value: 21 },
      ],
    };

    expect(evaluate(ast)).toBe(16);
  });
});
