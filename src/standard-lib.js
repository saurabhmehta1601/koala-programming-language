const all =
  (fn) =>
  (...list) =>
    list.reduce(fn);

const add = all((a, b) => a + b);
const subtract = all((a, b) => a - b);
const multiply = all((a, b) => a * b);
const divide = all((a, b) => a / b);
const modulo = all((a, b) => a % b);
const log = console.log;
const PI = Math.PI;
const pow = Math.pow;
const sqrt = Math.sqrt;
const max = (...args) => Math.max(...args)

exports.environment = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  log,
  PI,
  pow,
  sqrt,
  max
};
