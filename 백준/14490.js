// const GCD = (input) => {
//   let [a, b] = input.sort((a, b) => b - a);

//   let GCD = 0;
//   while (true) {
//     let num = a % b;
//     if (num === 0) break;
//     a = b;
//     b = num;
//   }

//   GCD = b;
//   return GCD;
// };

function gcd(num1, num2) {
  return num2 === 0 ? num1 : gcd(num2, num1 % num2);
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

  input.push(line);
  //   input.push(line);
}).on("close", function () {
  let temp = input[0].split(":");
  let a = parseInt(temp[0]);
  let b = parseInt(temp[1]);
  let result = gcd(a, b);

  console.log(`${a / result}:${b / result}`);

  process.exit(); // 프로세스 종료
});
