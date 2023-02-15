const stepsToReachOne = (n, steps=0) => {
  let i = 2
  while (i < Math.floor(Math.sqrt(n))) {
    if (n % i === 0) {
      return stepsToReachOne(n / i, steps + 1)
    } else {
      return stepsToReachOne(n - 1, steps + 1)
    }
  }
  return steps
}

console.log(stepsToReachOne(10394240))
