function getCharCodeFromString(string) {
  let result = [];
  for(let i = 0; i < string.length; i++) {
    result.push(string.charCodeAt(i));
  }
  return result;
}

function checkPermutation(str1: string, str2: string): boolean {
  let charCodesFromFirstString = getCharCodeFromString(str1).sort();
  let charCodesFromSecondString = getCharCodeFromString(str2).sort();

  let result = false;

  for(let i = 0; i < charCodesFromFirstString.length; i++) {
    for (let j = 0; j < charCodesFromSecondString.length; j++) {
      if (charCodesFromFirstString[i] == charCodesFromSecondString[i]) {
        result = true;
      } else {
        result = false;
      }
    } 
  }

  return result;
};

console.log(checkPermutation('god', 'dog'));
console.log(checkPermutation('test', 'Test'));