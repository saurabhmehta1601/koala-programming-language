const { AST_NODE_TYPES } = require('./constants');
const { environment } = require('./standard-lib');

function apply(node) {
  const fn = environment[node.name];
  const args = node.arguments.map(evaluate);
  if (typeof fn !== 'function') {
    throw new TypeError(`${node.name} is not a function`);
  }
  return fn(...args);
}

function getIdentifier(node) {
  if (environment[node.name]) {
    return environment[node.name];
  }
  throw new ReferenceError(`${node.name} is not`);
}

function evaluate(node) {
  if (node.type === AST_NODE_TYPES.CALL_EXPRESSION) {
    return apply(node);
  }
  if (node.type === AST_NODE_TYPES.IDENTIFIER) {
    return getIdentifier(node);
  }
  if (node.value) {
    return node.value;
  }
}

module.exports = { evaluate };
