const {
  isParanthesis,
  isWhiteSpace,
  isNumber,
  isWord,
  isQuote,
} = require('./identifiers');
function tokenize(input) {
  let tokens = [];
  let cursor = 0;

  while (cursor < input.length) {
    let character = input[cursor];

    if (isParanthesis(character)) {
      tokens.push({
        type: 'Parenthesis',
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
        type: 'Number',
        value: parseInt(number),
      });
      continue;
    }

    if (isWord(character)) {
      let name = '';
      while (isWord(character)) {
        name += character;
        cursor++;
        character = input[cursor];
      }
      tokens.push({
        type: 'Name',
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
        type: 'String',
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
    throw new Error(`${character} is not valid .`);
  }

  return tokens;
}

module.exports = tokenize;
