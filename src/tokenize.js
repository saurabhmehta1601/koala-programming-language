const { TOKEN_TYPES, ERROR } = require('./constants');
const {
  isParanthesis,
  isWhiteSpace,
  isNumber,
  isLetter,
  isQuote,
} = require('./identifiers');

function tokenize(input) {
  let tokens = [];
  let cursor = 0;

  while (cursor < input.length) {
    let character = input[cursor];

    if (isParanthesis(character)) {
      tokens.push({
        type: TOKEN_TYPES.PARENTHESIS,
        value: character,
      });
      cursor++;
      continue;
    }

    if (isNumber(character)) {
      let number = '';
      while (isNumber(character)) {
        number += character;
        cursor++;
        character = input[cursor];
      }
      tokens.push({
        type: TOKEN_TYPES.NUMBER,
        value: parseInt(number),
      });
      continue;
    }

    if (isLetter(character)) {
      let name = '';
      let i = 0;
      while (cursor < input.length && isLetter(input[cursor])) {
        name += input[cursor];
        cursor++;
      }
      tokens.push({
        type: TOKEN_TYPES.NAME,
        value: name,
      });
      continue;
    }

    // string
    if (isQuote(character)) {
      let str = '';
      while (!isQuote(input[++cursor])) {
        character = input[cursor];
        str += character;
      }
      tokens.push({
        type: TOKEN_TYPES.STRING,
        value: str,
      });
      cursor++;
      continue;
    }
    if (isWhiteSpace(character)) {
      cursor++;
      continue;
    }

    // throw error since for character matching none
    throw new Error(ERROR.SYNTAX_ERROR);
  }

  return tokens;
}

module.exports = tokenize;
