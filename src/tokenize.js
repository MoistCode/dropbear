const {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote,
} = require('./identify');

const {
  PARENTHESIS,
  NUMBER,
  NAME,
  STRING,
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

    if (isNumber(character)) {
      let number = character;

      while (isNumber(input[++cursor])) {
        number += input[cursor];
      }

      tokens.push({
        type: NUMBER,
        value: parseInt(number, 10),
      });

      continue;
    }

    if (isLetter(character)) {
      let symbol = character;

      while (isLetter(input[++cursor])) {
        symbol += input[cursor];
      }
      
      tokens.push({
        type: NAME,
        value: symbol,
      });

      continue;
    }

    if (isQuote(character)) {
      let string = input[++cursor];

      while (!isQuote(input[++cursor])) {
        string += input[cursor];
      }

      tokens.push({
        type: STRING,
        value: string,
      });

      cursor++;
      continue;
    }

    throw new Error(`${character} is not valid.`);
  }

  return tokens;
};

module.exports = { tokenize };
