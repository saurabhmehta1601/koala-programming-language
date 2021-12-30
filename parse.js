const { parse } = require('./src/parse');

console.log(
  "parse for value [{type: 'Number', value: 15} ] ",
  parse([{ type: 'Number', value: 15 }])
);
