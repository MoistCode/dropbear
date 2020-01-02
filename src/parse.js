const { isOpeningParenthesis, isClosingParenthesis } = require('./identify');
const { specialForms } = require('./special-forms');
const { peek, pop } = require('./utilities');
const { NUMBER, NUMBERIC_LITERAL } = require('./constants');

const parenthesize = () => {};

const parse = (token) => {
  const token = pop(tokens);

  if (token.type === NUMBER) {
    return {
      type: NUMBERIC_LITERAL,
      value: token.value,
    };
  }
};

module.exports = { parse: tokens => parse(parenthesize(tokens)) };
