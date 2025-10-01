const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const cardSet = new Set();

input[1].split(" ").map((card) => cardSet.add(Number(card)));

let result = [];

const target = input[3].split(" ").map(Number);

for (const element of target) {
  if (cardSet.has(element)) result.push(1);
  else result.push(0);
}

console.log(result.join(" "));
