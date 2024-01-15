const solution = (N, input) => {
  let output = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      let reminder = grades[i] % 5;
      if (reminder === 3) {
        output.push(grades[i] + 2);
      } else if (reminder === 4) {
        output.push(grades[i] + 1);
      } else {
        output.push(grades[i]);
      }
    } else {
      output.push(grades[i]);
    }
  }

  return output;
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
  let N = input.shift();
  console.log(solution(N, input));

  process.exit(); // 프로세스 종료
});
