const squaredDiffs = (coord1, coord2) => coord1 && coord2 ? coord1 ** 2 - coord2 ** 2 : 0
const distance = ([x1, y1], [x2, y2]) => Math.sqrt(squaredDiffs(x1, y1) + squaredDiffs(x2, y2))

const closestPoints = (points, closest=[[], []]) => {
  if (points.length === 1) {
    return closest
  }
  const head = points[0]
  points = points.slice(1)
  const localClosest = points.reduce((closestPts, curr) => {
    console.log("calling dist with", head, curr)
    const dist = distance(head, curr)
    if (dist < distance(closestPts[0], closestPts[1])) {
      return [head, curr]
    }
    return closestPts
  }, [points[0], points[1]])
  console.log("closest, localc", closest, localClosest)
  return closestPoints(
    points,
    distance(closest[0], closest[1]) > distance(localClosest[0], localClosest[1])
      ? closest
      : localClosest
  )
}

console.log(closestPoints([[1, 1], [-1, -1], [3, 4], [6, 1], [-1, -6], [-4, -3]]))

/*
```json

```

return

```json
[[1, 1], [-1, -1]]
```
*/
