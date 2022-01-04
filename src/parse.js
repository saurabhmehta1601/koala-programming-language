const { isOpeningParanthesis, isClosingParanthesis } = require('./identifiers');
const { peek, pop } = require('./utils');
const { AST_NODE_TYPES, TOKEN_TYPES } = require('./constants');

const parenthesize = (tokens) => {
  const token = pop(tokens);

  if (isOpeningParanthesis(token.value)) {
    const expression = [];

    while (!isClosingParanthesis(peek(tokens).value)) {
      expression.push(parenthesize(tokens));
    }

    pop(tokens);
    return expression;
  }

  return token;
};

const parse = (tokens) => {
  if (Array.isArray(tokens)) {
    const [first, ...rest] = tokens;
    return {
      type: AST_NODE_TYPES.CALL_EXPRESSION,
      name: first.value,
      arguments: rest.map(parse),
    };
  }

  const token = tokens;

  if (token.type === TOKEN_TYPES.NUMBER) {
    return {
      type: AST_NODE_TYPES.NUMERIC_LITERAL,
      value: token.value,
    };
  }

  if (token.type === TOKEN_TYPES.STRING) {
    return {
      type: AST_NODE_TYPES.STRING_LITERAL,
      value: token.value,
    };
  }

  if (token.type === TOKEN_TYPES.NAME) {
    return {
      type: AST_NODE_TYPES.IDENTIFIER,
      name: token.value,
    };
  }
};

module.exports = { parse: (tokens) => parse(parenthesize(tokens)) };
