const firstNonRepeatedCharacter = require('./index');

test('Static String Test', () => {
  expect(firstNonRepeatedCharacter('ABA')).toBe('B');
  expect(firstNonRepeatedCharacter('AACBDB')).toBe('C');
  expect(firstNonRepeatedCharacter('AABCABD')).toBe('B');
  expect(firstNonRepeatedCharacter('AAAAAAA')).toBe(null);
});

test('Pass number as string', () => {
    expect(firstNonRepeatedCharacter('11223')).toBe('3');
    expect(firstNonRepeatedCharacter('111111111112')).toBe('2');
    expect(firstNonRepeatedCharacter('1245444')).toBe('2');
  });
test('Pass int', () => {
    expect(firstNonRepeatedCharacter(11223)).toBe(3);
    expect(firstNonRepeatedCharacter(111111111112)).toBe(2);
  });
  test('Pass null', () => {
    expect(firstNonRepeatedCharacter('')).toBe(null);
    expect(firstNonRepeatedCharacter()).toBe(null);
  });



