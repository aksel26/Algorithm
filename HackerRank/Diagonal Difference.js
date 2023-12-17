const solution = (input) => {
  let sumA = 0;
  let sumB = 0;

  for (let i = 0; i < input[0].length; i++) {
    sumA += input[i][i];
    sumB += input[i][input[0].length - 1 - i];
  }

  return Math.abs(sumA - sumB);
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

  input.push(
    line
      .split("\n")
      .map((item) => item.split(" ").map(Number))
      .flat()
  );
  //   input.push(line);
}).on("close", function () {
  console.log(input);

  console.log("solution(input): ", solution(input));

  process.exit(); // 프로세스 종료
});
