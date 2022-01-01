// Given an integer n and a list of integers l, write a function that randomly generates a number from 0 to n-1 that isn't in l (uniform).

const getRando = (n) => Math.floor(Math.random() * n)
const randomNotInL = (n, l) => {
  const lSet = new Set(l)

  let rando = getRando(n)
  while (lSet.has(rando)) {
    rando = getRando(n)
  }
  return rando
}

for (let i = 0; i < 20; i++) {
  console.log(randomNotInL(20, [2, 4, 6, 8, 10]))
}

