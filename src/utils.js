const pop = (tokens) => {
  if (!Array.isArray(tokens))
    throw new Error('Passed argument to pop is not an array');
  return tokens.shift();
};

const peek = (tokens) => {
  if (!Array.isArray(tokens) )
    throw new Error('Passed argument to pop is not an array');
   return tokens[0];
};

module.exports = { pop, peek };
