const { isOpeningParanthesis, isClosingParanthesis } = require('./identifiers');
const { peek, pop } = require('./utils');

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
      type: 'CallExpression',
      name: first.value,
      arguments: rest.map(parse),
    };
  }

  const token = tokens;

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
