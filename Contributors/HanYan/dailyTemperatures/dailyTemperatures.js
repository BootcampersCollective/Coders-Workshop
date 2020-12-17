export default dailyTemperatures = temps => {
  const result = [];

  const findNextWarmerDayWait = i => {
    const thisTemp = temps[i];
    let j = i + 1;
    while (temps[j] <= thisTemp) {
      j++;
    }
    return (j >= temps.length) ? 0 : j - i; // check out of bounds
  }

  for (let i = 0; i < temps.length - 1; i++) {
    result.push(findNextWarmerDayWait(i));
  }
  result.push(0);
  return result;
}