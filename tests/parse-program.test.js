const { parseProgram } = require('../src/parse-program');
const { PARENTHESIS, NAME, NUMBER, STRING } = require('../src/constants');

describe(parseProgram, () => {
  it('should return a program node', () => {
    const tokens = [
      { type: PARENTHESIS, value: '(' },
      { type: NAME, value: 'define' },
      { type: NAME, value: 'x' },
      { type: NUMBER, value: 7 },
      { type: PARENTHESIS, value: ')' },
      { type: PARENTHESIS, value: '(' },
      { type: NAME, value: 'add' },
      { type: NAME, value: 'x' },
      { type: NAME, value: 'x' },
      { type: PARENTHESIS, value: ')' },
    ];

    expect(parseProgram(tokens).type).toBe('Program');
  });

  it('should have an array of expressions', () => {
    const tokens = [
      { type: PARENTHESIS, value: '(' },
      { type: NAME, value: 'define' },
      { type: NAME, value: 'x' },
      { type: NUMBER, value: 7 },
      { type: PARENTHESIS, value: ')' },
      { type: PARENTHESIS, value: '(' },
      { type: NAME, value: 'add' },
      { type: NAME, value: 'x' },
      { type: NAME, value: 'x' },
      { type: PARENTHESIS, value: ')' },
    ];

    const program = parseProgram(tokens);

    expect(Array.isArray(program.body)).toBe(true);
    expect(program.body.length).toBe(2);
  });
});
