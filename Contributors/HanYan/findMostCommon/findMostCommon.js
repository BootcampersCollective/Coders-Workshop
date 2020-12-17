export const findMostCommon = (input) => {
  // check if input is a list or string, value
  // otherwise, return null
  if (typeof input === "string") input = input.split("");
  if (Array.isArray(input)) {
    // now input is an array, 
    // keep track of most common freq and make an object: key = item, value = freq
    const frequencies = {};
    let maxFreq = 0;
    input.forEach(item => {
      if (frequencies[item] === undefined) frequencies[item] = 1;
      else frequencies[item]++;
      if (frequencies[item] > maxFreq) maxFreq = frequencies[item];
    });
    const uniqueInput = [...new Set(input)];
    return uniqueInput.filter(item => frequencies[item] === maxFreq);
  }
  else return null;
}