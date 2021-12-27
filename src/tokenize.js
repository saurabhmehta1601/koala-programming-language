const { isParanthesis, isWhiteSpace } = require("./identifiers");
function tokenize(input) {
  let tokens = [];
  let cursor = 0;

  while (cursor < input.length) {
    const character = input[cursor];

    if (isParanthesis(character)) {
      tokens.push({
        type: "Parenthesis",
        value: character,
      });
      cursor++;
      continue;
    }

    if (isWhiteSpace(character)) {
      cursor++;
      continue;
    }
    cursor++;
  }

  return tokens;
}

module.exports = tokenize;
