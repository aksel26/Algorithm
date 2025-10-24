const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const TOTAL = parseInt(input[0]);
const COMMANDS = input.slice(1).map(Number);

let result = [];

class PriorityQueue {
  constructor(compare = (a, b) => b - a) {
    this.heap = [];
    this.compare = compare;
  }

  push(v) {
    this.heap.push(v);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.isEmpty()) return 0;
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return top;
  }

  bubbleUp(idx) {
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.compare(this.heap[idx], this.heap[parent]) < 0) {
        [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]];
        idx = parent;
      } else {
        break;
      }
    }
  }

  bubbleDown(idx) {
    while (true) {
      let smallest = idx;
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;

      if (left < this.heap.length && this.compare(this.heap[left], this.heap[smallest]) < 0) {
        smallest = left;
      }

      if (right < this.heap.length && this.compare(this.heap[right], this.heap[smallest]) < 0) {
        smallest = right;
      }

      if (smallest !== idx) {
        [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];

        idx = smallest;
      } else {
        // 현재 idx에 있는 노드가 이미 자신의 자식들보다 작거나 같아서 힙(heap)의 규칙을 만족하고 있는 상태일 때입니다.
        // 즉, **"더 이상 내려갈 필요 없이 제자리를 찾았다"**는 뜻입니다.

        // 현재 노드 idx가 양쪽 자식 노드들보다 이미 작거나 같아서 최소 힙 규칙을 만족하고 있다
        break;
      }
    }
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.heap.length === 0;
  }
}

const maxPq = new PriorityQueue();

COMMANDS.forEach((command) => {
  if (command === 0) {
    const pop = maxPq.pop();
    result.push(pop);
  } else {
    maxPq.push(command);
  }
});

console.log(result.join("\n"));
