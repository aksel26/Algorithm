const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [INFO, SCORES] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

let sortedScore = SCORES.map(Number).sort((a, b) => b - a);

console.log(sortedScore[+INFO[1] - 1]);
