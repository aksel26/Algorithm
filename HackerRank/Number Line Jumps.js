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

  input = line.split(" ").map(Number);
  //   input.push(line);
}).on("close", function () {
  const [x1, v1, x2, v2] = input;
  while (true) {
    if (v2 >= v1) return "NO";
    x1 += v1;
    x2 += v2;
    if (x1 === x2) return "YES";
    if (x1 > x2) return "NO";
  }

  process.exit(); // 프로세스 종료
});
