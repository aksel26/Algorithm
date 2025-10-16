const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [vertex, edge, first] = input[0].split(" ").map(Number);
const vList = input.slice(2).map((item) => item.split(" ").map(Number));

class Graph {
  constructor() {
    this.adj = new Map();
    this.virus = 0;
  }

  addVertex(v) {
    if (!this.adj.has(v)) this.adj.set(v, []);
  }

  addEdges(v, u) {
    this.addVertex(u);
    this.addVertex(v);
    this.adj.get(u).push({ node: v });
    this.adj.get(v).push({ node: u });
  }

  getNeighbors(v) {
    return this.adj.get(v) || [];
  }

  dfsRecursive(start, visited = new Set(), result = []) {
    visited.add(start);
    result.push(start);

    for (const { node } of this.getNeighbors(start)) {
      if (!visited.has(node)) {
        this.virus += 1;
        this.dfsRecursive(node, visited, result);
      }
    }

    return result.join(" ");
  }

  virusCount() {
    return this.virus;
  }
}

const g = new Graph();

// 모든 정점을 먼저 추가
for (let i = 1; i <= vertex; i++) {
  g.addVertex(i);
}

for (const [v1, v2] of vList) {
  g.addEdges(v1, v2);
}

g.dfsRecursive(1);
console.log(g.virusCount());
// console.log(g.BFS(first));
