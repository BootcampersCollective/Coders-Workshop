def closure(graph):
    n = len(graph)
    reachable = [[0 for _ in range(n)] for _ in range(n)]

    for i, v in enumerate(graph):
        for neighbor in v:
            reachable[i][neighbor] = 1

    for k in range(n):
        for i in range(n):
            for j in range(n):
                reachable[i][j] |= (reachable[i][k] and reachable[k][j])

    return reachable