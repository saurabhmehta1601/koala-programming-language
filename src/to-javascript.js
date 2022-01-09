const generate = require('@babel/generator').default;
const { traverse } = require('./traverse');
const {
  AST_NODE_TYPES: { CALL_EXPRESSION, IDENTIFIER },
} = require('./constants');

const babelVisitor = {
  [CALL_EXPRESSION]: {
    enter({ node }) {
      node.callee = { type: IDENTIFIER, name: node.name };
    },
  },
};

const toJavascript = (ast) => {
  traverse(ast, babelVisitor);
  return generate(ast).code;
};

module.exports = { toJavascript };
