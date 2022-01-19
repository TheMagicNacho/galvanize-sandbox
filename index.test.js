const firstNonRepeatedCharacter = require('./index');

test('null', () => {
  expect(firstNonRepeatedCharacter('')).toBe(null);
});
test('repeat is null', () => {
  expect(firstNonRepeatedCharacter('0001')).toBe(null);
});
test("the first nonrepeated character in the string `AABCAC`", () => {
  expect(firstNonRepeatedCharacter('0002')).toBe('B');
});
test("the first nonrepeating character in the string `ABCA`", () => {
  expect(firstNonRepeatedCharacter('1123')).toBe('B');
});
test("the first nonrepeating character in the string `AAAACX`", () => {
  expect(firstNonRepeatedCharacter('1234')).toBe('C');
});
test("the first nonrepeating character in the string `AABCABD`", () => {
  expect(firstNonRepeatedCharacter('5987')).toBe('C');
});




