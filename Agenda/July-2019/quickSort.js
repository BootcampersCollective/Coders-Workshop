const quickSort = arr => {

    if (arr.length <= 1)
        return arr

    const [pivot, ...rest] = arr;

    const left = []
    const right = []

    rest.forEach(num => {
        (num < pivot)
            ? left.push(num)
            : right.push(num)
    })

    return quickSort(left).concat(pivot).concat(quickSort(right))
}