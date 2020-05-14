// For example, given words "hello", and "world" and a text content of "dog cat hello cat dog dog hello cat world", 
//return 1 because there's only one word "cat" in between the two words.


// get indicies of each word
// taking the absolute value of the differences of each index



const findTheDistance = (str1, str2, phrase) => {
  const words = phrase.split(" ");
  let str1Indices = [];
  let str2Indices = [];
  words.forEach((word, index) => {
    if (word === str1) {
      str1Indices.push(index);
    } else if (word === str2) {
      str2Indices.push(index);
    };
  });

  let i = 0
  let j = 0
  let shortestDistance = words.length;

  while (i < words.length && j < words.length) {
      if (Math.abs(str1Indices[i] - str2Indices[j] < shortestDistance)) {
          shortestDistance = Math.abs(str1Indices[i] - str2Indices[j]) - 1
      }
      if (str1Indices[i] < str2Indices[j]) {
          i++
      } else {
          j++
      }
  }
  return shortestDistance


}; 

const findTheDistanceNested = (str1, str2, phrase) => {
    const words = phrase.split(" ");
  let str1Indices = [];
  let str2Indices = [];
  words.forEach((word, index) => {
    if (word === str1) {
      str1Indices.push(index);
    } else if (word === str2) {
      str2Indices.push(index);
    };
  });
  let shortestDistance = words.length;
      str1Indices.forEach(index1 => {
    str2Indices.forEach(index2 => {
      if (Math.abs(index1 - index2) < shortestDistance) {
        shortestDistance = Math.abs(index1 - index2) - 1;
      };
    });
  });
return shortestDistance;

}

console.log(findTheDistance("hello", "world", "dog cat hello cat dog dog hello cat world"))