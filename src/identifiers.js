const WHITESPACE = /\s/;
const LETTER = /[a-zA-Z]/;
const NUMBER = /^[0-9]+$/;
const OPERATORS = ['-', '+', '/', '*', '%'];

const isWhiteSpace = (character) => WHITESPACE.test(character);

const isLetter = (character) => LETTER.test(character);

const isNumber = (character) => NUMBER.test(character);

const isOpeningParanthesis = (character) => character === '(';

const isClosingParanthesis = (character) => character === ')';

const isParanthesis = (character) =>
  isOpeningParanthesis(character) || isClosingParanthesis(character);

const isQuote = (character) => character === '"';

const isOperator = (character) => OPERATORS.includes(character);

module.exports = {
  isNumber,
  isQuote,
  isOperator,
  isParanthesis,
  isOpeningParanthesis,
  isClosingParanthesis,
  isLetter,
  isWhiteSpace,
};
