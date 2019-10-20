function getHIndex(arr) {
    const sorted = arr.sort()
    const len = arr.length
    let result = 0

    for (let i = 0; i < len; i++) {
        if (len - i <= arr[i]) {
            result = arr[i]
            break
        }
    }
    return result 
}

console.log(getHIndex([4, 3, 0, 1, 5]))
console.log(getHIndex([0, 1, 0, 0]))