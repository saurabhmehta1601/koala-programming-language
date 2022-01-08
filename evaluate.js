const { TOKEN_TYPES, AST_NODE_TYPES } = require('./src/constants');
const { evaluate } = require('./src/evaluate');

const ast = {
  type: AST_NODE_TYPES.CALL_EXPRESSION,
  name: 'add',
  arguments: [
    { type: TOKEN_TYPES.NUMBER, value: 1 },
    { type: TOKEN_TYPES.NUMBER, value: 2 },
    { type: TOKEN_TYPES.NUMBER, value: 3 },
  ],
};

console.log(evaluate(ast));
