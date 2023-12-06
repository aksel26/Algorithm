const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputValue = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let average =
  inputValue.reduce((prev, cur) => (prev += cur)) / inputValue.length;

let sorted = inputValue.sort((a, b) => a - b);
let centerValue = sorted[Math.floor(inputValue.length / 2)];

console.log(`${average}\n${centerValue}`);
