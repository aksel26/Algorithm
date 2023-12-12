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

  const numbers = input[0];

  console.log(numbers.sort((a, b) => a - b).join(" "));

  process.exit(); // 프로세스 종료
});
