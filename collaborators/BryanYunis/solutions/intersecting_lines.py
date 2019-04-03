def intersecting_lines(p, q):
    intersections = 0
    for i in range(len(p)):
        for j in range(len(p) - i  - 1):
            if (q[j + 1] < q[i]):
                intersections = intersections + 1
    return intersections

print(intersecting_lines([1, 2, 3], [1, 2, 3]))