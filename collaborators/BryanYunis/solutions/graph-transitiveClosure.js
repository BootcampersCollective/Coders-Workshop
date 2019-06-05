function closure(graph) {
    const reachable = new Array(graph.length).fill(new Array(graph.length).fill(0))

    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            reachable[i][graph[i][j]] = 1
        }
    }
    console.log(reachable)
    for (let k = 0; k < graph.length; k++) {
        for (let i = 0; i < graph.length; i++) {
            for (let j = 0; j < graph.length; j++) {
                if (reachable[i][k] && reachable[k][j]) {
                    reachable[i][j] = 1
                }
            }
        }
    }
    // return reachable
}

closure([
    [0, 1, 3],
    [1, 2],
    [2],
    [3]
])