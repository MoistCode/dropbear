const {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote,
} = require('./identify');

const {
  PARENTHESIS
} = require('./constants');

const tokenize = (input) => {
  const tokens = [];
  let cursor = 0;

  // for (; cursor < input.length; cursor++) {

  // }

  while (cursor < input.length) {
    const character = input[cursor];

    if (isWhitespace(character)) {
      cursor++;
      continue;
    }

    if (isParenthesis(character)) {
      tokens.push({
        type: PARENTHESIS,
        value: character,
      });

      cursor++;
      continue;
    }
  }

  return tokens;
};

module.exports = { tokenize };
