const CALC = (분모) => {
  let [a, b] = 분모;

  let mod = a % b;

  let LCM = 0;
  let GCD = 0;

  while (mod > 0) {
    a = b;
    b = mod;

    mod = a % b;
  }

  LCM = (분모[0] * 분모[1]) / b;
  GCD = b;

  return { LCM, GCD };
};

const solution = (분자, 분모) => {
  let result = "";
  let { LCM } = CALC(분모);
  let 분자곱 = 분모.map((x, index) => (LCM / x) * 분자[index]);

  let { GCD } = CALC([분자곱[0] + 분자곱[1], LCM]);

  result = (분자곱[0] + 분자곱[1]) / GCD + " " + LCM / GCD;

  return result;
};

/* readline Module */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(...line.split(" ").map((el) => parseInt(el)));
}).on("close", function () {
  let 분자 = [input[0], input[2]];
  let 분모 = [input[1], input[3]];
  console.log(solution(분자, 분모));
  process.exit(); // 프로세스 종료
});
