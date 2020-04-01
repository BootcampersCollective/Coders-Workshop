const rotateMatrix = arr => {

    let n = arr.length
    const rotatedArr = new Array(n).fill(new Array(n).fill([]))

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < arr[0].length; c++) {
            console.log(arr[r][c])
            rotatedArr[c][n - r - 1] = arr[r][c]
        }
    }
    return rotatedArr
}


const rotateArr2 = arr => {
    const n = arr.length
    for (let r = 0; r < Math.floor(arr[0].length / 2); r++) {
        for (let c = r; c < n - r - 1; c++) {

            // top-left, top-middle
            const p1 = arr[r][c]
            // top-right, middle-right
            const p2 = arr[c][n - r - 1]
            // bottom-right, bottom-middle
            const p3 = arr[n - r - 1][n - c - 1]
            // bottom-left, middle-left
            const p4 = arr[n - c - 1][r]

            // swap top-left, top-middle with bottom-left, middle-left
            arr[c][n - r - 1] = p1
            // swap top-right, middle-right with top-left, top-middle
            arr[n - r - 1][n - c - 1] = p2
            // swap bottom-right, bottom-middle with top-right, middle-right
            arr[n - c - 1][r] = p3
            // swap bottom-left, middle-left with bottom-right, bottom-middle
            arr[r][c] = p4

            // move down while row is less than int(n/2)
        }
    }
    return arr
}
console.log(rotateArr2([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
    ]))