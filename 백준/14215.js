const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((item) => +item);

let sorted = input.sort((a, b) => b - a);

let [a, b, c] = sorted;
if (a === b && b === c && a === c) console.log(a * 3);
else if (a >= b + c) {
  let temp = sorted.slice(1);
  let sum = temp.reduce((prev, cur) => prev + cur);
  console.log(sum + sum - 1);
} else if (a < b + c) {
  console.log(a + b + c);
}
