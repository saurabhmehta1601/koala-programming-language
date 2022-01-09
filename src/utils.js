const pop = (tokens) => tokens.shift();

const peek = (tokens) => tokens[0];

const pipe =
  (...funcs) =>
  (value) => {
    return funcs.reduce((value, func) => func(value), value);
  };

module.exports = { pop, peek, pipe };
