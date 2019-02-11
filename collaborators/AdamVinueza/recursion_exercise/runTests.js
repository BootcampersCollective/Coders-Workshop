#!/usr/bin/env node
/*
 * Just gets the lengths of increasingly large arrays of numbers. It shouldn't
 * matter what's in the arrays, because getLength doesn't ever look inside
 * the array, but if you want to test that, feel free.
 */
const recursionExercise = require('./recursionExercise.js');

for (let expected = 0; expected < 1000; expected++) {
  const actual = recursionExercise.getLength(new Array(expected));
  if (expected != actual) {
    console.log(`Error: expected ${expected}, actual ${actual}`);
  }
}
