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
  CALL_EXPRESSION,
} = require('./constants');

const parenthesize = tokens => {
  const token = pop(tokens);

  if (isOpeningParenthesis(token.value)) {
    const expression = [];

    while (!isClosingParenthesis(peek(tokens).value)) {
      expression.push(parenthesize(tokens));
    }

    pop(tokens);
    return expression;
  }

  return token;
};

const parse = tokens => {
  if (Array.isArray(tokens)) {
    const [first, ...rest] = tokens;

    return {
      type: CALL_EXPRESSION,
      name: first.value,
      arguments: rest.map(parse),
    };
  }

  switch (tokens.type) {
    case NUMBER:
      return {
        type: NUMBERIC_LITERAL,
        value: tokens.value,
      };
    case STRING:
      return {
        type: STRING_LITERAL,
        value: tokens.value,
      };
    case NAME:
      return {
        type: IDENTIFIER,
        name: tokens.value,
      };
  }
};

module.exports = { parse: tokens => parse(parenthesize(tokens)) };
