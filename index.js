var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (this.nodes[node]) ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let go = this.nodes[node][1];
  this.nodes[go] = [null, null];

  delete this.nodes[node];

};


// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // IN two nodes[{
  console.log(this.nodes[fromNode][1]);
  return (this.nodes[fromNode][1] === toNode) ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode] = [fromNode, toNode];
  this.nodes[toNode] = [toNode, fromNode];
  // this.nodes[fromNode] = toNode;
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if(this.hasEdge(fromNode, toNode)){
    // delete this.nodes[fromNode];
    this.nodes[fromNode] = [null, null];
    this.nodes[toNode] = [null, null];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // for (let i=0; i < this.node){

  // }
   for (let n of Object.values(this.nodes)) {
     cb(n)
   }
};

  //UNIT TEST//
  console.log(Graph());
  let testGraph = Graph();
  console.log(testGraph.addNode(1));


////OLD STUFF ///
  // Instantiate a new graph
// var Graph = function() {
//   // let newGraph = Array.from()
//   // newGraph.AdjArr = [[],[]];
//   // var newGraph = Object.create(GraphMethods);
 
//   // newGraph.node = null;
//   // newGraph.adj = [];

//   // return newGraph;
//   // this.adjacency = new Map();
//   // return adjacency;

//   // return [];
//   this.nodes = {};
//   this.edges = {};
// };


// class Graph {
//   constructor(nodes, edges){
//     this.nodes = nodes;
//     this.edges = edges;
//   }
// }

  
