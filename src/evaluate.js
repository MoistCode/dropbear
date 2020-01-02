const { environment } = require('./standard-library');
const { CALL_EXPRESSION, IDENTIFIER } = require('./constants');
const last = collection => collection[collection.length - 1];

const apply = node => {
  const fn = environment[node.name];
  const args = node.arguments.map(evaluate);

  if (typeof fn !== 'function') {
    throw new TypeError(`${node.name} is not a function`);
  }
  return fn(...args);
}

const getIdentifier = node => {
  if (environment[node.name]) return environment[node.name];

  throw new ReferenceError(`${node.name} is not an ${IDENTIFIER}`);
}

const evaluate = (node) => {
  switch (node.type) {
    case CALL_EXPRESSION:
      return apply(node);
    case IDENTIFIER:
      return getIdentifier(node);
  }

  if (node.value) return node.value;
};

module.exports = { evaluate };
