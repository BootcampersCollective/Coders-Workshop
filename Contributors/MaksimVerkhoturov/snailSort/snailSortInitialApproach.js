// works but only in case all the values are unique

/* eslint-disable no-unused-vars */
const snail = array => {
  if (!Array.isArray(array)) return []
  if (array.length === 1) return array[0]
  // record touched numbers
  const result = []
  const resolutionIndex = array[0].length - 1
  let topRowI = 0
  let rightColumnI = resolutionIndex // of all arrays (right)
  let bottomRowI = resolutionIndex
  let leftColumnI = 0 // of all arrays (left)

  const traversing = (topRow, rightColumn, bottomRow, leftColumn) => {
    for (let i = 0; i < 4; i++) {
      // one full cycle (dynamic)
      // break out once no more space to collapse is left

      if (i === 0) {
        // go through the top row (left to right)
        for (const topNumber of array[topRow]) {
          if (result.includes(topNumber)) continue
          result.push(topNumber)
        }
      }
      if (i === 1) {
        // go through the right row of all arrays (top to bottom)
        for (const eachArray of array) {
          // if last number is already in the result array (we walked on it already)
          if (result.includes(eachArray[rightColumn])) {
            continue
          } else {
            result.push(eachArray[rightColumn])
          }
        }
      }
      if (i === 2) {
        // go through the bottom row (right to left)
        for (const bottomNumber of [...array[bottomRow]].reverse()) {
          if (result.includes(bottomNumber)) {
            continue
          } else {
            result.push(bottomNumber)
          }
        }
      }
      if (i === 3) {
        // go through the left row of all arrays (bottom to top)
        for (const eachArray of [...array].reverse()) {
          // if last number is already in the result array (we walked on it already)
          if (result.includes(eachArray[leftColumn])) {
            continue
          } else {
            result.push(eachArray[leftColumn])
          }
        }
      }
    }
  }

  while (true) {
    traversing(topRowI, rightColumnI, bottomRowI, leftColumnI)
    if (topRowI + 1 > resolutionIndex) break
    topRowI += 1
    rightColumnI -= 1
    bottomRowI -= 1
    leftColumnI += 1
  }
  return result
}
