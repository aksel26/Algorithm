class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }
  push(value) {
    // 1번
    this.arr[this.index++] = value;
  }
  delete() {
    // 2번
    if (this.index <= 0) return -1;
    const res = this.arr[--this.index];
    return res;
  }
  size() {
    // 3번
    return this.index;
  }
  isEmpty() {
    // 4번
    if (this.index <= 0) return 1;
    else return 0;
  }

  printTop() {
    // 5번
    if (this.index <= 0) return -1;
    else return this.arr[this.index - 1];
  }
}

// 문제 풀이
function solution(N, COMMANDS) {
  let stack = new Stack();
  let answer = [];
  for (let i = 0; i < N; i++) {
    const command = COMMANDS[i][0];

    if (command === 1) {
      stack.push(command[1]);
    } else if (command === 2) {
      answer.push(stack.delete());
    } else if (command === 3) {
      answer.push(stack.size());
    } else if (command === 4) {
      answer.push(stack.isEmpty());
    } else if (command === 5) {
      answer.push(stack.printTop());
    }
  }
  return answer.join("\n");
}

/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  //   input = line; // 입력받은 문자열, line
  //   input = parseInt(line); // 형변환, parseInt
  //   rl.close(); // 입력 종료

  input.push(line.split(" ").map((el) => parseInt(el)));
  //   input.push(line);
}).on("close", function () {
  const N = input.shift();

  const COMMANDS = [...input];
  console.log(solution(N, COMMANDS));

  process.exit(); // 프로세스 종료
});
