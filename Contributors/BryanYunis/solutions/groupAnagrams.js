const groupAnagrams = arr => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const startingLength = result.length;
    for (let j = i + 1; j < arr.length; j++) {
      if (checkAnagrams(arr[j], arr[i]) === true) {
        result.push(arr[j]);
      }
    }
    const endingLength = result.length;
    startingLength;
    endingLength;
    arr[i]; //?
    if (startingLength !== endingLength && result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    } else {
      if (result.indexOf(arr[i]) === -1) result.unshift(arr[i]);
    }
  }
  return result;
};

const checkAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return;
  }
  const arr1 = str1.split("").sort();
  const arr2 = str2.split("").sort();
  //split each string into an array and sort it. To compare them, join back into arrays

  return arr1.join("") === arr2.join("");
};

const stringSort = str => {
  return str
    .split("")
    .sort()
    .join("");
};

const compareFn = (a, b) => {
  return stringSort(a) - stringSort(b);
};

const array = ["apple", "race", "god", "care", "dog"];

array.sort(); //?
