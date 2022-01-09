const { transform } = require('../src/transform');
const {
  AST_NODE_TYPES: {
    CALL_EXPRESSION,
    NUMERIC_LITERAL,
    IDENTIFIER,
    VARIABLE_DECLARATOR,
  },
} = require('../src/constants');

describe('transform', () => {
  it('transforms AST NODE with name define', () => {
    const args = [
      { type: IDENTIFIER, name: 'myvar' },
      { type: NUMERIC_LITERAL, value: 12 },
    ];

    const ast = {
      type: CALL_EXPRESSION,
      name: 'define',
      arguments: [...args],
    };

    transform(ast);
    expect(ast.type).toBe(VARIABLE_DECLARATOR);
    expect(ast.identifier).toEqual(args[0]);
    expect(ast.assignment).toEqual(args[1]);
    expect(ast.arguments).toBeUndefined();
    expect(ast.name).toBeUndefined();
  });
});
