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
  if (parseInt(input) % 2 === 0) console.log("CY");
  else console.log("SK");

  process.exit(); // 프로세스 종료
});
