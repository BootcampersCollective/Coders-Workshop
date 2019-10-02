const multiplyAllNotMe = items => items.map((item, index) => {
    const [...itemsCopy] = items
    itemsCopy.splice(index, 1)
    return itemsCopy.reduce((a, b) => a * b, 1)
})

console.log(multiplyAllNotMe([1, 2, 3, 4, 5]))