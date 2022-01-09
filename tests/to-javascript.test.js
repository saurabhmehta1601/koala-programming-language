const { toJavascript } = require('../src/to-javascript');
const {
  AST_NODE_TYPES: {
    CALL_EXPRESSION,
    NUMERIC_LITERAL,
    STRING_LITERAL,
    VARIABLE_DECLARATION,
  },
} = require('../src/constants');

describe('toJavascript', () => {
  it('should transform nested ast to valid javascript', () => {
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
  it('should transform koala declaration to javascript declaration', () => {
    const ast = {
      type: VARIABLE_DECLARATION,
      identifier: { type: STRING_LITERAL, value: 'myName' },
      assignment: { type: STRING_LITERAL, value: 'koala' },
    };

    expect(toJavascript(ast)).toBe('let "myName" = "koala";');
  });
});
