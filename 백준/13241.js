const solution = (input) => {
  let sorted = input.sort((a, b) => b - a);

  let [a, b] = sorted;

  let GCD = 0;
  let LCD = a * b;

  while (true) {
    let temp = a % b;

    if (temp === 0) break;
    a = b;
    b = temp;
  }
  GCD = b;
  LCD = LCD / GCD;
  return LCD;
};

/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(...line.split(" ").map(Number));
}).on("close", function () {
  console.log(solution(input)); // 문제 풀이 함수 호출
  process.exit(); // 프로세스 종료
});
