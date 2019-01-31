const getLength = (array) => {
  let count = 0
  while(count < array.length) {
    count++
    getLength(array.slice(1))
  }

  return count;
};

module.exports = getLength;