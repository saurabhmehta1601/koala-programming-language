const TOKEN_TYPES = {
  STRING: 'String',
  NUMBER: 'Number',
  PARENTHESIS: 'Parenthesis',
  NAME: 'Name',
};

const AST_NODE_TYPES = {
  CALL_EXPRESSION: 'CallExpression' ,
  NUMERIC_LITERAL: 'NumericLiteral' ,
  STRING_LITERAL: 'StringLiteral' ,
  IDENTIFIER: 'Identifier'
}

const ERROR = {
  SYNTAX_ERROR: 'SyntaxError',
};

module.exports = { TOKEN_TYPES, ERROR , AST_NODE_TYPES };
