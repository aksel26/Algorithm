const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
const ranges = input.slice(2).map((num) => num.split(" ").map(Number));

let result = [];
let cumulativeSumByRange = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  cumulativeSumByRange[i] = cumulativeSumByRange[i - 1] + numbers[i - 1];
}

for (const [start, end] of ranges) {
  const sum = cumulativeSumByRange[end] - cumulativeSumByRange[start - 1];
  result.push(sum);
}

console.log(result.join("\n"));
