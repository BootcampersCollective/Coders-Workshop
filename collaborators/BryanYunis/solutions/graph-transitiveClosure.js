function closure(graph) {
    const reachable = new Array(graph.length)
    reachable.forEach(array => {
        array.fill(newArray(graph.length).fill(0))
    })
    console.log(reachable)

    for (let i = 0; i < graph.length; i++) {
        const neighbors = graph[i]
        for (let j = 0; j < neighbors.length; j++) {
            const neighbor = neighbors[j]
            // console.log(i, neighbor)
            reachable[i][neighbor] = neighbor
            // console.log(reachable)
        }
    }

    console.log(reachable)
    // for (let k = 0; k < graph.length; k++) {
    //     for (let i = 0; i < graph.length; i++) {
    //         for (let j = 0; j < graph.length; j++) {
    //             if (reachable[i][k] && reachable[k][j]) {
    //                 reachable[i][j] = 1
    //             }
    //         }
    //     }
    // }
    // return reachable
}

closure([
    [0, 1, 3],
    [1, 2],
    [2],
    [3]
])