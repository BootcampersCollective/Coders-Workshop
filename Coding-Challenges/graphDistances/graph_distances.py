#!/usr/bin/env python3

class Graph:

    def __init__(self):
        self.vertices = []
        self.adj_list = {}

    def add_vertex(self, v):
        if v not in self.vertices:
            self.vertices.append(v)
            self.adj_list[v] = []

    def add_edge(self, v, w):
        if not self.adj_list.get(v):
            self.add_vertex(v)
        if not self.adj_list.get(w):
            self.add_vertex(w)
        self.adj_list.get(v).append(w)
        self.adj_list.get(w).append(v)


def initialize_color(vertices):
    color = {}
    for i in range(0, len(vertices)):
        color[vertices[i]] = "WHITE"
    return color


def breadth_first_search(graph, start_vertex, callback = None):
    vertices = graph.vertices
    adj_list = graph.adj_list
    color = initialize_color(vertices)
    queue = []

    queue.append(start_vertex)
    while (len(queue) != 0):
        vertex = queue.pop(0)  # gets first element added
        neighbors = adj_list.get(vertex)  # get all self vertex's neighbors
        color[vertex] = "GRAY"  # we have discovered but not completely explored
        for i in range(0, len(neighbors)):
            neighbor = neighbors[i]
            if color[neighbor] == "WHITE":
                color[neighbor] = "GRAY"
                queue.append(neighbor)  # add to queue so we can finish exploring

        # finished exploring self vertex and its adjacent vertices
        color[vertex] = "BLACK"  # mark as completely explored
        if callable(callback):
            callback(vertex)  # execute callback function if there is one


def print_vertex(value):
    print("Visited vertex: " + value)


graph = Graph()

graph.add_vertex("A")
graph.add_edge("A", "B")
graph.add_edge("B", "E")
graph.add_edge("A", "C")
graph.add_edge("A", "D")

vertices = graph.vertices

breadth_first_search(graph, vertices[0], print_vertex)
