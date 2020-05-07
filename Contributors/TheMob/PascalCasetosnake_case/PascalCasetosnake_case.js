// Complete the function/method so that it takes PascalCase string and returns the string in snake_case notation.
// Lowercase characters can be numbers. If method gets number, it should return string.
// solve using RegEx

// $&

const toSnakeyBoi = (str) =>
  str
    .replace(/[A-Z][a-z]*/g, "_$&")
    .toLowerCase()
    .slice(1);

console.log(toSnakeyBoi("TestCaseTestCaseTestCaseTestCaseTestCaseTestCaseTestCaseTestCaseTestCaseTestCaseTestCaseTestCaseTestCaseTestCase"));
// add a assertion

// str
//   .match(/[A-Z][a-z]*/g)
//   .map((substr) => substr.toLowerCase())
//   .join("_");
