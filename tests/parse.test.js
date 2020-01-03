import { parse } from '../src/parse';
import { PARENTHESIS, NAME, NUMBER, STRING, NUMBERIC_LITERAL, CALL_EXPRESSION, STRING_LITERAL, IDENTIFIER } from '../src/constants';

describe(parse, () => {
  it('should return a token with the type of NumericLiteral for number tokens', () => {
    const tokens = [{ type: NUMBER, value: 2 }];

    const ast = { type: NUMBERIC_LITERAL, value: 2 };

    expect(parse(tokens)).toEqual(ast);
  });

  // Exercise 3 Begin
  it('should return a token with the type of StringLiteral for string tokens', () => {
    const tokens = [{ type: STRING, value: 'hello' }];

    const ast = { type: STRING_LITERAL, value: 'hello' };

    expect(parse(tokens)).toEqual(ast);
  });

  it('should return a token with the type of NumericLiteral for number tokens', () => {
    const tokens = [{ type: NAME, value: 'x' }];

    const ast = { type: IDENTIFIER, name: 'x' };

    expect(parse(tokens)).toEqual(ast);
  });
  // Exercise 3 End

  it('should return an AST for a basic data structure', () => {
    const tokens = [
      { type: PARENTHESIS, value: '(' },
      { type: NAME, value: 'add' },
      { type: NUMBER, value: 2 },
      { type: NUMBER, value: 3 },
      { type: PARENTHESIS, value: ')' },
    ];

    const ast = {
      type: CALL_EXPRESSION,
      name: 'add',
      arguments: [
        { type: NUMBERIC_LITERAL, value: 2 },
        { type: NUMBERIC_LITERAL, value: 3 },
      ],
    };

    const result = parse(tokens);

    expect(result).toEqual(ast);
  });

  it('should return an AST for a nested data structure', () => {
    const tokens = [
      { type: PARENTHESIS, value: '(' },
      { type: NAME, value: 'add' },
      { type: NUMBER, value: 2 },
      { type: NUMBER, value: 3 },
      { type: PARENTHESIS, value: '(' },
      { type: NAME, value: 'subtract' },
      { type: NUMBER, value: 4 },
      { type: NUMBER, value: 2 },
      { type: PARENTHESIS, value: ')' },
      { type: PARENTHESIS, value: ')' },
    ];

    const ast = {
      type: CALL_EXPRESSION,
      name: 'add',
      arguments: [
        { type: NUMBERIC_LITERAL, value: 2 },
        { type: NUMBERIC_LITERAL, value: 3 },
        {
          type: CALL_EXPRESSION,
          name: 'subtract',
          arguments: [
            { type: NUMBERIC_LITERAL, value: 4 },
            { type: NUMBERIC_LITERAL, value: 2 },
          ],
        },
      ],
    };

    const result = parse(tokens);

    expect(result).toEqual(ast);
  });
});
