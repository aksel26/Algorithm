const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +fs.readFileSync(filePath).toString().trim();

const initial = 2;

let sum = 0;

for (let i = 0; i < input; i++) {
  sum += Math.pow(2, i);
}

console.log("sum: ", Math.pow(sum + initial, 2));
