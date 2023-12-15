const solution = (input) => {
  const max = Math.max(...input);

  console.log(input.sort((a, b) => b - a).lastIndexOf(max) + 1);
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

  input.push(line);
  //   input.push(line);
}).on("close", function () {
  const A = input[0].split(" ").map(Number);
  const B = input[1].split(" ").map(Number);
  let answer = [0, 0];

  for (let i = 0; i < A.length; i++) {
    if (A[i] < B[i]) answer[1]++;
    if (A[i] > B[i]) answer[0]++;
  }

  return answer.join(" ");

  process.exit(); // 프로세스 종료
});
