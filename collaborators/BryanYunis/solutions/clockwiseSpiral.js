const clockwiseSpiral = A => {
  const N = A[0].length,
    M = A.length
  let x = 0
  let y = 0
  let loop = 0
  const res = []
  let keepGoing = true

  while (keepGoing) {
    while (x < N - loop) {
      res.push(A[y][x++])
      if (res.length === M * N) {
        keepGoing = false
        break
      }
    }
    x--
    y++
    while (y < M - loop) {
      res.push(A[y++][x])
      if (res.length === M * N) {
        keepGoing = false
        break
      }
    }
    y--
    x--
    while (x >= loop) {
      res.push(A[y][x--])
      if (res.length === M * N) {
        keepGoing = false
        break
      }
    }
    x++
    y--
    loop++
    while (y >= loop) {
      res.push(A[y--][x])
      if (res.length === M * N) {
        keepGoing = false
        break
      }
    }
    y++
    x++
  }
  return res
}

const result = clockwiseSpiral([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
])

console.log(result)
