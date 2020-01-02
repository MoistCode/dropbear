const {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote,
} = require('./identify');

const tokenize = (input) => {
  const tokens = [];
  let cursor = 0;

  // for (; cursor < input.length; cursor++) {

  // }

  while (cursor < input.length) {
    cursor ++;
  }

  return tokens;
};

module.exports = { tokenize };
