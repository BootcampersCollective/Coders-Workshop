#!/usr/bin/env node

const keyMap = keys => {

};

console.log(keyMap({
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"]
})); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
