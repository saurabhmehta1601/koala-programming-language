const { toJavascript } = require('../src/to-javascript');
const {
  AST_NODE_TYPES: { CALL_EXPRESSION, NUMERIC_LITERAL },
} = require('../src/constants');

describe('toJavascript', () => {
  it('should transform koala to valid javascript', () => {
    const ast = {
      type: [CALL_EXPRESSION],
      name: 'add',
      arguments: [
        { type: NUMERIC_LITERAL, value: 12 },
        { type: NUMERIC_LITERAL, value: 7 },
        {
          type: CALL_EXPRESSION,
          name: 'subtract',
          arguments: [
            { type: NUMERIC_LITERAL, value: 7 },
            { type: NUMERIC_LITERAL, value: 3 },
          ],
        },
      ],
    };
    expect(toJavascript(ast)).toBe('add(12, 7, subtract(7, 3))');
  });
});
