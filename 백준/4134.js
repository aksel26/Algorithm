// 문제 풀이
function solution(N, numbers) {
  let arr = [...numbers];
  let answer = [];
  const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  while (arr.length !== 0) {
    if (isPrime(arr[0])) {
      answer.push(arr[0]);
      arr.shift();
    } else {
      arr[0]++;
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

  input.push(...line.split(" ").map((el) => parseInt(el)));
  //   input.push(line);
}).on("close", function () {
  const N = input.shift();
  const NUMBERS = [...input];

  console.log(solution(N, NUMBERS));

  process.exit(); // 프로세스 종료
});
