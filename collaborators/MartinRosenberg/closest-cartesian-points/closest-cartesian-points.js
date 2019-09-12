const distance = (a, b) => Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)

const closestCartesianPoints = (points) => {
  let shortestDist = Number.MAX_VALUE
  let closestPair = null
  points.forEach((a, i) => {
    points.slice(i + 1).forEach((b) => {
      const currDist = distance(a, b)
      if (currDist < shortestDist) {
        shortestDist = currDist
        closestPair = [a, b]
      }
    })
  })
  return closestPair
}
