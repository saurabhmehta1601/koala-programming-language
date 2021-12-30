const pop = (tokens) => tokens.shift();

const peek = (tokens) => tokens[0];

module.exports = { pop, peek };
