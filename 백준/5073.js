const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

for (let i = 0; i < input.length; i++) {
  let [a, b, c] = input[i].sort((a, b) => b - a);

  if (a === 0 && b === 0 && c === 0) break;

  if (b + c > a) {
    if (a === b && b === c && c === a) console.log("Equilateral");
    else if (a === b || b === c || c === a) console.log("Isosceles");
    else console.log("Scalene");
  } else {
    console.log("Invalid");
  }
}
