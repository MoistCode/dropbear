const { isOpeningParenthesis, isClosingParenthesis } = require('./identify');
const { specialForms } = require('./special-forms');
const { peek, pop } = require('./utilities');
const {
  NUMBER,
  STRING,
  NAME,
  NUMBERIC_LITERAL,
  STRING_LITERAL,
  IDENTIFIER,
} = require('./constants');

const parenthesize = tokens => {
  return tokens;
};

const parse = tokens => {
  const token = pop(tokens);

  switch (token.type) {
    case NUMBER:
      return {
        type: NUMBERIC_LITERAL,
        value: token.value,
      };
    case STRING:
      return {
        type: STRING_LITERAL,
        value: token.value,
      };
    case NAME:
      return {
        type: IDENTIFIER,
        name: token.value,
      };
  }
};

module.exports = { parse: tokens => parse(parenthesize(tokens)) };
