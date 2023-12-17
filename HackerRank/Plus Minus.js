const solution = (input) => {
  let pos = 0;
  let neg = 0;
  let zero = 0;

  let size = input.length;

  let answer = [];
  input.forEach((element) => {
    if (element < 0) {
      neg++;
    } else if (element > 0) {
      pos++;
    } else {
      zero++;
    }
  });
  answer.push(Number(pos / size).toFixed(6));
  answer.push(Number(neg / size).toFixed(6));
  answer.push(Number(zero / size).toFixed(6));

  return answer.join("\n");
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

  input = line.split(" ").map(Number);
  //   input.push(line);
}).on("close", function () {
  console.log(input);

  console.log("solution(input): ", solution(input));

  process.exit(); // 프로세스 종료
});
