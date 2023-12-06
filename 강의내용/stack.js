class Stack {
  constructor() {
    this.arr = [];
  }
  push(item) {
    if (this.arr[this.arr.length - 1] !== item) {
      this.arr.push(item);
    }
  }
}

function solution(arr) {
  let stack = new Stack();

  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  return stack.arr;

  //   return answer;
}

console.log(solution([4, 4, 4, 3, 3]));
