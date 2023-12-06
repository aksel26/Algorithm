const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = input.reduce((prev, cur) => prev + cur);

let a = input[0];
let b = input[1];
let c = input[2];
if (sum !== 180) console.log("Error");
else {
  if (input.every((item) => item === 60)) console.log("Equilateral");
  else {
    if (a === b || b === c || c === a) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  }
}
