// For example, if you were given input first_name your function would return First Name. 
// Or with input LAST_NAME your function would return Last Name.

const assert = require('assert');

const prettify = str => {
    // split based on underscore => ["first", "name"]
    let split = str.toLowerCase().split('_');
    // some kind of validation --> TODO
    // make sure all letters are lowercase
    // capitalize first letter
    const pretty = split.map(word => {
      const capSplit = word.charAt(0).toUpperCase(); // first capitalized letter
      const restSplit = word.slice(1,); // rest of the world
      return capSplit + restSplit;
        
    })
    // return a string, include a space
    return pretty.join(' ');
  
};

const prettifyOneLine = str => str
    .toLowerCase()
    .split('_')
    .map(word => word
        .charAt(0)
        .toUpperCase() + word.slice(1,))
        .join(' ');

assert.deepStrictEqual(prettifyOneLine("first_name"), "First Name");
assert.deepStrictEqual(prettifyOneLine("LAST_NAME"), "Last Name");
assert.deepStrictEqual(prettifyOneLine("FOO_BAR_foo_bar"), "Foo Bar Foo Bar");
assert.deepStrictEqual(prettifyOneLine("FOO"), "Foo");
assert.deepStrictEqual(prettifyOneLine(""), "");
console.log('All tests passing.');

