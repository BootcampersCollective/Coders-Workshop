// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
// For example, given [100, 4, 200, 1, 3, 2], the longest consecutive element sequence is ]. Return its length: 4.

// sort the array => [1, 2, 3, 4, 100, 200]
// iterate through the array
    // see if next element is array[i] + 1


const longestConsecutiveSequence = arr => {
    arr.sort((a, b) => a - b)

    let count = 1
    const counts = []

    for (let i = 0; i < arr.length - 1; i++) {
        
        if (arr[i] + 1 === arr[i + 1]) {
            // there is a consecutive number
            count++
        } else {
            counts.push(count)
            count = 1
        }
    }
    return Math.max(...counts)
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 5, 2, 6]))

const longestConsecutiveSequenceBigON = arr => {
    const hashMap = {}
    let count = 1

    arr.forEach(item => {
        hashMap[item] = item
    })

    arr.forEach(item => {
        if (hashMap[item + 1] !== undefined) {
            count++
        }
    })
}