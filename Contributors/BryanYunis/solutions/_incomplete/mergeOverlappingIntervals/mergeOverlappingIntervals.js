function mergeOverlappingIntervals(intervals) {
    // sort intervals by start time
    const intervalsCopy = [...intervals]
    intervalsCopy.sort((a, b) => a[0] - b[0])
    const mergedIntervals = []

    intervalsCopy.forEach((interval, i) => {
        if (i > 0) {
            const prev = mergedIntervals.length - 1
            if (prev && interval[1] < prev[1]) {
                prev = [prev[0], Math.max(prev[1], interval[1])]
            } else {
                mergedIntervals.push(interval)
            }
        } else {
            mergedIntervals.push(interval)
        }
    })
    return mergedIntervals
}

console.log(mergeOverlappingIntervals([[1, 3], [5, 8], [4, 10], [20, 25]]))
// console.log(mergeOverlappingIntervals([[1, 4], [5, 11], [6, 14]]))
