const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, B] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));

console.log(N.toString(B).toUpperCase());
