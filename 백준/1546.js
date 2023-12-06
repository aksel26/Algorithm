const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const inputValue = fs.readFileSync(filePath).toString().trim().split("\n");

let scores = inputValue[1].split(" ").map(Number);

let maxScore = Math.max(...scores);

let modified = scores.map((score) => {
  let modifyNumber = (score / maxScore) * 100;
  return modifyNumber;
});

let averageScore = modified.reduce((prev, cur) => prev + cur) / modified.length;
console.log(averageScore);
