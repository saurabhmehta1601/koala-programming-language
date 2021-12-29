const { TYPES, ERROR } = require('./constants');
console.log('TYPES is ', TYPES);
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
        type: TYPES.PARENTHESIS,
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
        type: TYPES.NUMBER,
        value: parseInt(number),
      });
      continue;
    }

    if (isLetter(character)) {
      let name = '';
      while (isLetter(character)) {
        name += character;
        cursor++;
        character = input[cursor];
      }
      tokens.push({
        type: TYPES.NAME,
        value: name,
      });
      continue;
    }

    if (isQuote(character)) {
      let str = '';
      cursor++;
      while (!isQuote(input[cursor])) {
        character = input[cursor];
        str += character;
        cursor++;
      }
      tokens.push({
        type: TYPES.STRING,
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
