const solution = (input) => {
  let sorted = input.sort((a, b) => b - a);

  let sum = sorted.reduce((prev, cur) => prev + cur);
  let min = sum - sorted[0];
  let max = sum - sorted[sorted.length - 1];
  console.log(min, max);
};

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

  input.push(...line.split(" ").map((el) => parseInt(el)));
  //   input.push(line);
}).on("close", function () {
  console.log(solution(input));

  process.exit(); // 프로세스 종료
});
