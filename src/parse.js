const { isOpeningParanthesis, isClosingParanthesis } = require('./identifiers');
const { pop, peek } = require('./utils');

// using parenthesis for guiding the depth level of token in nesting
const parenthesize = (tokens) => {
  if (tokens.length === 0) return tokens;
  const token = pop(tokens);

  if (isOpeningParanthesis(token.value)) {
    const expression = [];
    while (!isClosingParanthesis(token.value)) {
      expression.push(parenthesize(tokens));
    }

    pop(tokens);
    return expression;
  }

  return tokens;
};

const parse = (tokens) => {
  if (!Array.isArray(tokens)) return [];
  if (tokens.length < 1) return [];

  const token = pop(tokens);

  if (Array.isArray(token)) {
    const [first, ...rest] = token;
    return {
      type: 'CallExpression',
      name: first.value,
      arguments: rest.map(parse),
    };
  }

  if (token.type === 'Number') {
    return {
      type: 'NumericLiteral',
      value: token.value,
    };
  }
  if (token.type === 'String') {
    return {
      type: 'StringLiteral',
      value: token.value,
    };
  }
  if (token.type === 'Name') {
    return {
      type: 'Identifier',
      name: token.value,
    };
  }
};

module.exports = { parse: (tokens) => parse(parenthesize(tokens)) };
