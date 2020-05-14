const assert = require("assert");

const encoderDecoder = str => {
    if (/[0-9]/.test(str)) {
      return decode(str);
    } else {
      return encode(str);
    }
}

const encode = str => {
  let encoded = "";
  let p = 0;
  while (p < str.length) {
    let currentCount = 1;
    let i = p;
    if (p < str.length) {
      i = p + 1;
    };
    while (str[p] === str[i]) {
      currentCount++;
      i++;
    }
    encoded += currentCount + str[p];
    p = i;
  };
  
  return encoded;
};

const decode = str => {
  let decoded = "";
  let p = 0;
  while (p < str.length) {
    if (/[1-9]/.test(str[p])) {
      decoded += str[p + 1].repeat(str[p]);
    };
    p++;
  };
  return decoded;
};


assert.deepEqual(encoderDecoder("AAAABBBCCD"), "4A3B2C1D");
assert.deepEqual(encoderDecoder("4A3B2C1D"), "AAAABBBCCD");
assert.deepEqual(encoderDecoder("CCCCEEAA"), "4C2E2A");
assert.deepEqual(encoderDecoder("4C2E2A"), "CCCCEEAA");
console.log("All tests passing!");