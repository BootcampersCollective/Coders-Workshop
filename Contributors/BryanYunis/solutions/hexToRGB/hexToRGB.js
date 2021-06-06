const assert = require('assert');
const compose = (fn1, fn2) => (...args) => fn1.apply(this, [fn2.apply(this, args)]);

const hexToDigit = (h) => parseInt(h, 16);

const getChars = (s, e) => (str) => str.slice(s, e);

const getRed = getChars(1, 3);
const getGreen = getChars(3, 5);
const getBlue = getChars(5, 7);

const getRedHex = compose(hexToDigit, getRed);
const getGreenHex = compose(hexToDigit, getGreen);
const getBlueHex = compose(hexToDigit, getBlue);

const hexToRGB = (hex) => ({ r: getRedHex(hex), g: getGreenHex(hex), b: getBlueHex(hex) });

assert.deepStrictEqual(hexToRGB('#FF9933'), { r: 255, g: 153, b: 51 });
console.log('All tests passed!')
