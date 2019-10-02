#!/usr/bin/env node

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Map();
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  getVertices() {
    return this.vertices;
  }

  getAdjList() {
    return this.adjList;
  }
}


const initializeColor = vertices => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = "WHITE";
  }
  return color;
}

const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = [];

  queue.push(startVertex);
  while (queue.length !== 0) {
    const vertex = queue.shift(); // gets first element added
    const neighbors = adjList.get(vertex); // get all this vertex's neighbors
    color[vertex] = "GRAY"; // we have discovered but not completely explored
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (color[neighbor] === "WHITE") {
        color[neighbor] = "GRAY";
        queue.push(neighbor); // add to queue so we can finish exploring
      }
    }
    // finished exploring this vertex and its adjacent vertices
    color[vertex] = "BLACK"; // mark as completely explored
    if (callback) {
      callback(vertex); // execute callback function if there is one
    }
  }
}

const printVertex = value => {
  console.log("Visited vertex: " + value);
}

const graph = new Graph();

graph.addVertex("A");
graph.addEdge("A", "B");
graph.addEdge("B", "E");
graph.addEdge("A", "C");
graph.addEdge("A", "D");

const vertices = graph.getVertices();

breadthFirstSearch(graph, vertices[0], printVertex);
