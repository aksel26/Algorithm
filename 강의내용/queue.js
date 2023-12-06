class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(item) {
    this.arr.push(item);
  }

  dequeue() {
    return this.arr.shift();
  }

  first() {
    if (this.arr.length !== 0) {
      return this.arr[0];
    } else {
      return null;
    }
  }
  isEmpty() {
    if (this.arr.length === 0) return true;
    else return false;
  }
}

function solution(progresses, speeds) {
  let result = [];

  let queue = new Queue();
  let cnt = 1;

  progresses.forEach((item, index, arr) => {
    queue.enqueue(Math.ceil((100 - item) / speeds[index]));
  });
  let maxDay = queue.first();
  for (let i = 1; i < queue.arr.length; i++) {
    if (queue.arr[i] <= maxDay) {
      cnt++;
    } else {
      maxDay = queue.arr[i];
      result.push(cnt);
      cnt = 1;
    }
  }
  result.push(cnt);

  //   while (!queue.isEmpty()) {
  //     let outValue = queue.dequeue();
  //     let cur = queue.first();
  //     if (cur !== null) {
  //       if (outValue >= cur) {
  //         cnt++;
  //       } else {
  //         result.push(cnt);
  //         cnt = 1;
  //       }
  //     }
  //     if (cur === null) result.push(cnt);
  //   }

  console.log(result);
  console.log("queue: ", queue);
}

solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
// solution([93, 30, 55], [1, 30, 5]);
