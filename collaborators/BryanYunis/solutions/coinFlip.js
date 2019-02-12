//recursion

const coins = n => {
  let count = 0

  const recur = n => {
    if (n <= 1) {
      return
    }
    count++
    return recur(n / 2)
  }

  recur(n)
  return count
}

// no recrusion

const coinsNoRecursion = n => {
  let count = 0

  while (n > 1) {
    n /= 2
    count++
  }
  return count
}

console.log(coinsNoRecursion(1))

// math class

const coinsMath = n => {
  return Math.log(n) / Math.log(2)
}

console.log(coinsMath(412))
