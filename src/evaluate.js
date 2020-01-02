const { environment } = require('./standard-library');
const { CALL_EXPRESSION } = require('./constants');
const last = collection => collection[collection.length - 1];

const apply = node => {
  const fn = environment[node.name];
  const args = node.arguments.map(evaluate);

  if (typeof fn !== 'function') {
    throw new TypeError(`${node.name} is not a function`);
  }
  return fn(...args);
}

const evaluate = (node) => {
  switch (node.type) {
    case CALL_EXPRESSION:
      return apply(node);
  }

  if (node.value) return node.value;
};

module.exports = { evaluate };
