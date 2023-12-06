const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

let maxValue = 0;

let X = 0;
let Y = 0;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (maxValue <= input[i][j]) {
      maxValue = input[i][j];
      X = j + 1;
      Y = i + 1;
    }
  }
}
console.log(maxValue);
console.log(`${Y} ${X}`);
