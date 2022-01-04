const { TOKEN_TYPES } = require('./src/constants');
const { parse } = require('./src/parse');

const tokens = [
  { type: TOKEN_TYPES.PARENTHESIS, value: '(' },
  { type: TOKEN_TYPES.NAME, value: 'add' },
  { type: TOKEN_TYPES.NUMBER, value: '2' },
  { type: TOKEN_TYPES.NUMBER, value: '3' },
  { type: TOKEN_TYPES.PARENTHESIS, value: '(' },
  { type: TOKEN_TYPES.NAME, value: 'subtract' },
  { type: TOKEN_TYPES.NUMBER, value: '3' },
  { type: TOKEN_TYPES.NUMBER, value: '2' },
  { type: TOKEN_TYPES.PARENTHESIS, value: ')' },
  { type: TOKEN_TYPES.PARENTHESIS, value: ')' },
];
console.log(parse(tokens));
