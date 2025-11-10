class minHeap {
  constructor() {
    this.heap = [];
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIdx = this.heap.length - 1;

    while (currentIdx > 0) {
      const parentIdx = Math.floor((currentIdx - 1) / 2);
      if (this.heap[parentIdx] > this.heap[currentIdx]) {
        this.swap(parentIdx, currentIdx);
        currentIdx = parentIdx;
      } else {
        break;
      }
    }
  }
  pop() {
    if (this.heap.length === 0) return null;
    // 힙에 값이 1개만 있으면 그냥 pop
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];

    this.heap[0] = this.heap.pop();

    this.bubbleDown();

    return minValue;
  }
  bubbleDown() {
    let currentIdx = 0;
    while (true) {
      const leftChildIdx = currentIdx * 2 + 1;
      const rightChildIdx = currentIdx * 2 + 2;

      let smallestIdx = currentIdx;

      if (leftChildIdx < this.heap.length && this.heap[leftChildIdx] < this.heap[smallestIdx]) {
        smallestIdx = leftChildIdx;
      }

      if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] < this.heap[smallestIdx]) {
        smallestIdx = rightChildIdx;
      }

      if (smallestIdx === currentIdx) break;
      this.swap(currentIdx, smallestIdx);
      currentIdx = smallestIdx;
    }
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  print() {
    return this.heap;
  }
}

function solution(scoville, K) {
  var answer = 0;

  const minH = new minHeap();

  scoville.forEach((item) => {
    minH.push(item);
  });

  while (true) {
    const minimum = minH.peek();
    if (minimum >= K) break;

    if (minH.size() < 2 && minimum < K) {
      answer = -1;
      break;
    } else {
      const easiestOne = minH.pop();
      const easiestTow = minH.pop();

      let newScore = easiestOne + easiestTow * 2;
      answer++;

      minH.push(newScore);
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
