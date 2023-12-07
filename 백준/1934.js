const calc = (input) => {
  let [a, b] = input;

  let min = Math.min(...input);

  let gcd = 1;

  for (let i = 2; i <= min; ) {
    if (a % i === 0 && b % i === 0) {
      a /= i;
      b /= i;
      gcd *= i;

      i = 2;
    } else {
      i++;
    }
  }
  return a * b * gcd;
};

const solution = (N, numbers) => {
  for (let i = 0; i < N; i++) {
    let sorted = numbers[i].sort((a, b) => b - a);
    if (sorted[0] % sorted[1] === 0) console.log(sorted[0]);
    else {
      console.log(calc(sorted));
    }
  }
};

/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", function () {
  const numbers = input.slice(1);
  const N = input.shift();
  solution(N, numbers); // 문제 풀이 함수 호출
  process.exit(); // 프로세스 종료
});
