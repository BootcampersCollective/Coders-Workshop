function intersectingLines(p, q) {
    let intersections = 0
    for (let i =0; i < p.length; i++){
        for (let j = i + 1; j < q.length; j++) {
            if (q[j] < q[i]) {
                intersections++
            }
        }
    }
    return intersections
}

console.log(intersectingLines([1, 2, 3], [2, 1, 3]))