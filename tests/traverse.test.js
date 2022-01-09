const { traverse } = require('../src/traverse');
const { AST_NODE_TYPES } = require('../src/constants');

describe('traverse', () => {
  it('should travel all nodes changes CallExpression name from add to subtract and changes Numeric node value to twice', () => {
    const ast = {
      type: AST_NODE_TYPES.CALL_EXPRESSION,
      name: 'add',
      arguments: [
        { type: AST_NODE_TYPES.NUMERIC_LITERAL, value: 12 },
        { type: AST_NODE_TYPES.NUMERIC_LITERAL, value: 6 },
      ],
    };

    const visitor = {
      [AST_NODE_TYPES.CALL_EXPRESSION]: {
        enter({ node }) {
          if (node.name == 'add') {
            node.name = 'subtract';
          }
        },
      },
      [AST_NODE_TYPES.NUMERIC_LITERAL]: {
        exit({ node }) {
          node.value = node.value * 2;
        },
      },
    };
    traverse(ast, visitor);
    expect(ast.name).toBe('subtract');
    expect(ast.arguments[0].value).toBe(24);
    expect(ast.arguments[1].value).toBe(12);
  });
});
