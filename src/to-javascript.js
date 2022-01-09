const generate = require('@babel/generator').default;
const { traverse } = require('./traverse');
const {
  AST_NODE_TYPES: {
    CALL_EXPRESSION,
    IDENTIFIER,
    VARIABLE_DECLARATOR,
    VARIABLE_DECLARATION,
  },
} = require('./constants');

const babelVisitor = {
  [CALL_EXPRESSION]: {
    enter({ node }) {
      node.callee = { type: IDENTIFIER, name: node.name };
    },
  },
  [VARIABLE_DECLARATION]: {
    enter({ node }) {
      node.kind = 'let';
      node.declarations = [
        {
          type: VARIABLE_DECLARATOR,
          id: node.identifier,
          init: node.assignment,
        },
      ];
    },
  },
};

const toJavascript = (ast) => {
  traverse(ast, babelVisitor);
  return generate(ast).code;
};

module.exports = { toJavascript };
