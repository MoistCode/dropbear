import { evaluate } from '../src/evaluate';
import { NUMBERIC_LITERAL, CALL_EXPRESSION, IDENTIFIER, STRING_LITERAL } from '../src/constants';

describe(evaluate, () => {
  it('should fall back to returning a primitive numeric value', () => {
    const ast = { type: NUMBERIC_LITERAL, value: 2 };

    expect(evaluate(ast)).toBe(2);
  });

  it('should fall back to returning a primitive string value', () => {
    const ast = { type: 'StringValue', value: 'Hello' };

    expect(evaluate(ast)).toBe('Hello');
  });

  it('should be able to evaluate a single expression', () => {
    const ast = {
      type: CALL_EXPRESSION,
      name: 'add',
      arguments: [
        { type: NUMBERIC_LITERAL, value: 2 },
        { type: NUMBERIC_LITERAL, value: 3 },
      ],
    };

    const result = evaluate(ast);

    expect(result).toBe(5);
  });

  it('should be able to evaluate a nested expression', () => {
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
            { type: NUMBERIC_LITERAL, value: 5 },
            { type: NUMBERIC_LITERAL, value: 4 },
          ],
        },
      ],
    };

    const result = evaluate(ast);

    expect(result).toBe(6);
  });

  it('should be able to lookup identifiers in the environment', () => {
    const ast = { type: 'Identifier', name: 'pi' };
    expect(evaluate(ast)).toBe(Math.PI);
  });

  it('should be able to highest number in a range', () => {
    const ast = {
      type: CALL_EXPRESSION,
      name: 'max',
      arguments: [
        { type: NUMBERIC_LITERAL, value: 2 },
        { type: NUMBERIC_LITERAL, value: 3 },
        { type: NUMBERIC_LITERAL, value: 10 },
      ],
    };

    expect(evaluate(ast)).toBe(10);
  });
});
