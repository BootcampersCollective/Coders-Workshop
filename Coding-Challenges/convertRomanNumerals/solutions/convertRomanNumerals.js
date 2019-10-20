#!/usr/bin/env node

// TODO: This solution isn't quite working yet!

// XII => 12
// IV => 4

const romans = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
};

// "MCM"

// romans[i]

const romanToDecimal = string => {
  let decimal = 0;
  let currentValue = string[0];
  if (string.length === 1) {
    return romans[currentValue];
  }
  for (let i = 1; i < string.length; i++) {
    const nextValue = string[i];
    if (romans[nextValue] > romans[currentValue]) {
      decimal += romans[nextValue] - romans[currentValue];
      i++;
    } else {
      decimal += romans[currentValue];
    }
    currentValue = nextValue;
  }
  return decimal;
};

romanToDecimal("MCM"); //?
