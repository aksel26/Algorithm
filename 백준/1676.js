const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = Number(fs.readFileSync(filePath));

// const factorial = (N) => {
//   if (N === 0) return 1;
//   else return N * factorial(N - 1);
// };

// let cnt = 0;

// let facResult = factorial(N).toString();
// let indexZero = facResult[facResult.length - 1];
// if (indexZero !== "0") return console.log(0);
// else {
//   let arr = [...facResult];
//   for (let index = arr.length; index >= 0; index--) {
//     if (arr[index] === "0") cnt++;
//   }
// }
// console.log(cnt);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

function Factorial(input) {
  let answer = 0;
  if (input === 0) answer;
  for (let i = 1; i <= input; i++) {
    if (i % 5 === 0) answer++;
    if (i % 25 === 0) answer++;
    if (i % 125 === 0) answer++;
  }
  return answer;
}

console.log(Factorial(input));
