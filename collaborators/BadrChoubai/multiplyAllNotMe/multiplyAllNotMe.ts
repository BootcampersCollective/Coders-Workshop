const multiplyAllNotMe = (numbers: number[]): Array<number> => {
  const product = numbers.reduce((x, y) => x * y);
  let result: number[] = new Array(numbers.length);

  for (let i = 0; i < numbers.length; i++) {
    result[i] = product / numbers[i];
  }
  return result;
}

console.time()
console.log(multiplyAllNotMe([1,2,3,4,5]));
console.timeEnd();