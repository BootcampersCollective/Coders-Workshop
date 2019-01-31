const dayTrader = (array) => {
  let highMargins = [];

  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      // compare difference between array[j] - array[i]
        highMargins.push(array[j] - array[i])  
    } 
  }
  return Math.max(...highMargins);
};

console.log(dayTrader([9, 11, 8, 5, 7, 10]));

