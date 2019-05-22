def h_index(citations):
    n = len(citations)
    counts = [0 for _ in range(n + 1)]

    for citation in citations:
        if citation >= n:
            counts[n] += 1
        else:
            counts[citation] += 1

    total = 0
    for i in range(n, -1, -1):
        total += counts[i]
        if total >= i:
            return i
