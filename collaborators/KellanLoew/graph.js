class Graph {
    constructor(isDirected = false){
        this.vertices = [];
        this.adjList = new Map();
    }
    addVertex(v){
        if(!this.vertices.includes(v)){
            this.vertices.push(v);
            this.adjList.set(v, []);
        }
    }
    addEdge(v, w){
        if (!this.adjList.get(v)){
            this.addVertex(v);
        }
        if (!this.adjList.get(w)){
            this.addVertex(w);
        }
        
    }
}

const myGraph = new Graph();
myGraph.addVertex("q");
myGraph.addEdge("q", "r");
console.log(myGraph)
