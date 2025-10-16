const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [vertex, edge, first] = input[0].split(" ").map(Number);
const vList = input.slice(1).map((item) => item.split(" ").map(Number));

class Graph {
  constructor() {
    this.adj = new Map();
    this.parent = new Map();
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

  sortEdges() {
    for (const [key, edges] of this.adj) {
      edges.sort((a, b) => a.node - b.node);
    }
  }

  BFS(v) {
    this.parent.clear();

    if (!this.adj.has(v)) return;
    const queue = [v];
    const visited = new Set([v]);
    const result = [v];
    this.parent.set(v, null);

    while (queue.length > 0) {
      const u = queue.shift();
      for (const edge of this.adj.get(u)) {
        const v = edge.node;
        if (!visited.has(v)) {
          visited.add(v);
          result.push(v);
          this.parent.set(v, u);
          queue.push(v);
        }
      }
    }
    return result.join(" ");
  }

  getNeighbors(v) {
    return this.adj.get(v) || [];
  }

  dfsRecursive(start, visited = new Set(), result = []) {
    visited.add(start);
    result.push(start);

    for (const { node } of this.getNeighbors(start)) {
      if (!visited.has(node)) {
        this.dfsRecursive(node, visited, result);
      }
    }

    return result.join(" ");
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

g.sortEdges();

console.log(g.dfsRecursive(first));
console.log(g.BFS(first));
