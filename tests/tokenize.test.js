import { tokenize } from '../src/tokenize';
import { PARENTHESIS, NAME, NUMBER, STRING } from '../src/constants';

describe(tokenize, () => {
  it('should return an array', () => {
    expect(Array.isArray(tokenize(''))).toBe(true);
  });

  it('should be able to tokenize a pair of parentheses', () => {
    const input = '()';
    const result = [
      { type: PARENTHESIS, value: '(' },
      { type: PARENTHESIS, value: ')' },
    ];

    expect(tokenize(input)).toEqual(result);
  });

  it('should ignore whitespace completely', () => {
    const input = '                  ';
    const result = [];

    expect(tokenize(input)).toEqual(result);
  });

  // Exercise 1 - Begin
  it('should correctly tokenize a single digit', () => {
    const input = '2';
    const result = [{ type: NUMBER, value: 2 }];

    expect(tokenize(input)).toEqual(result);
  });

  it('should be able to handle single numbers in expressions', () => {
    const input = '(1 2)';

    const result = [
      { type: PARENTHESIS, value: '(' },
      { type: NUMBER, value: 1 },
      { type: NUMBER, value: 2 },
      { type: PARENTHESIS, value: ')' },
    ];

    expect(tokenize(input)).toEqual(result);
  });

  it('should be able to handle single letters in expressions', () => {
    const input = '(a b)';

    const result = [
      { type: PARENTHESIS, value: '(' },
      { type: NAME, value: 'a' },
      { type: NAME, value: 'b' },
      { type: PARENTHESIS, value: ')' },
    ];

    expect(tokenize(input)).toEqual(result);
  });
  // Exercise 1: End

  it('should be able to handle multiple-digit numbers', () => {
    const input = '(11 22)';

    const result = [
      { type: PARENTHESIS, value: '(' },
      { type: NUMBER, value: 11 },
      { type: NUMBER, value: 22 },
      { type: PARENTHESIS, value: ')' },
    ];

    expect(tokenize(input)).toEqual(result);
  });

  // Exercise 2 Begin
  it('should correctly tokenize a simple expression', () => {
    const input = '(add 2 3)';
    const result = [
      { type: PARENTHESIS, value: '(' },
      { type: NAME, value: 'add' },
      { type: NUMBER, value: 2 },
      { type: NUMBER, value: 3 },
      { type: PARENTHESIS, value: ')' },
    ];

    expect(tokenize(input)).toEqual(result);
  });

  it('should ignore whitespace', () => {
    const input = '   (add    2 3)';
    const result = [
      { type: PARENTHESIS, value: '(' },
      { type: NAME, value: 'add' },
      { type: NUMBER, value: 2 },
      { type: NUMBER, value: 3 },
      { type: PARENTHESIS, value: ')' },
    ];

    expect(tokenize(input)).toEqual(result);
  });
  // Exercise 2 End

  it('should know about strings', () => {
    const input = '(log "hello" "world")';
    const result = [
      { type: PARENTHESIS, value: '(' },
      { type: NAME, value: 'log' },
      { type: STRING, value: 'hello' },
      { type: STRING, value: 'world' },
      { type: PARENTHESIS, value: ')' },
    ];

    expect(tokenize(input)).toEqual(result);
  });
});
