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

  if (isOpeningParenthesis(token)) {
    const expression = [];

    while (!isClosingParenthesis(token.value)) {
      expression.push(parenthesize(token));
    }
    
    pop(tokens);
    return expression;
  }

  return tokens;
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
