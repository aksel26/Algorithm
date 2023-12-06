const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputValue = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let origin = [1, 1, 2, 2, 2, 8];

console.log(inputValue.map((item, index) => origin[index] - item).join(" "));
